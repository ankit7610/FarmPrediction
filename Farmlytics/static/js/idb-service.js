const DB_NAME = 'FarmlyticsDB';
const DB_VERSION = 1;
const STORE_NAME = 'predictions';

const dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
    };

    request.onsuccess = (event) => {
        resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
            const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            store.createIndex('type', 'type', { unique: false });
            store.createIndex('date', 'date', { unique: false });
        }
    };
});

const FarmlyticsDB = {
    async savePrediction(type, result, details = {}) {
        try {
            const db = await dbPromise;
            return new Promise((resolve, reject) => {
                const tx = db.transaction(STORE_NAME, 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                
                const item = {
                    type,
                    result,
                    details,
                    date: new Date().toISOString(),
                    timestamp: Date.now()
                };
                
                const request = store.add(item);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                
                tx.oncomplete = () => console.log('Transaction completed');
                tx.onerror = (event) => console.error('Transaction error:', event.target.error);
            });
        } catch (error) {
            console.error('Error saving prediction:', error);
        }
    },

    async getHistory() {
        try {
            const db = await dbPromise;
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const index = store.index('date');
            
            return new Promise((resolve) => {
                const request = index.openCursor(null, 'prev');
                const results = [];
                
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor && results.length < 10) {
                        results.push(cursor.value);
                        cursor.continue();
                    } else {
                        resolve(results);
                    }
                };
            });
        } catch (error) {
            console.error('Error getting history:', error);
            return [];
        }
    }
};

// Expose to window
window.FarmlyticsDB = FarmlyticsDB;
