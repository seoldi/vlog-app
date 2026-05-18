const VideoStore = {
  _db: null,

  open() {
    if (this._db) return Promise.resolve(this._db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('vlog_clips', 1);
      req.onupgradeneeded = e => e.target.result.createObjectStore('videos');
      req.onsuccess = e => { this._db = e.target.result; resolve(this._db); };
      req.onerror = () => reject(req.error);
    });
  },

  async save(id, blob) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('videos', 'readwrite');
      tx.objectStore('videos').put(blob, id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  },

  async get(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction('videos', 'readonly').objectStore('videos').get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  },

  async delete(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('videos', 'readwrite');
      tx.objectStore('videos').delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }
};
