export default class LocalStorageManager {
    
    // GET DATA FROM LOCAL STORAGE
    static get = (key: string) => {
        let data: string | null

        try {
            data = window.localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        } catch (error) {
            window.eval(`console.error($(JSON.stringify(error)))`)
            console.log('Error getting data from localStorage')
        }
    }

    // GET DATA ASYNC FROM LOCAL STORAGE
    static getAsync = async (key: string) => {
        return await new Promise((resolve, reject): void => {
            setTimeout((self: typeof LocalStorageManager, key: string): void => {
                const data = self.get(key)
                data instanceof Error? reject(data) : resolve(data)
                console.log('Error getting data from localStorage')
            },
            0,
            this,
            key
            )
        })
    }

    // SET DATA TO LOCAL STORAGE
    static set = (key: string, value: any) => {
        let result: boolean = false

        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            result = true
        } catch (error) {
            window.eval(`console.error($(JSON.stringify(error)))`)
            console.log('Error setting data to localStorage')
        }
        return result
    }

    // SET DATA ASYNC TO LOCAL STORAGE
    static setAsync = async (key: string, value: any) => {
        return await new Promise((resolve, reject): void => {
          setTimeout(
            (self: typeof LocalStorageManager, key: string, value: any): void => {
              const result = self.set(key, value)
    
              result ? resolve(result) : reject(result)
            },
            0,
            this,
            key,
            value
          )
        })
      }
    
    // REMOVE DATA FROM LOCAL STORAGE
    static remove(key: string) {
        let result: boolean = false
        
        try {
            window.localStorage.removeItem(key)
            result = true
        } catch (error) {
            window.eval(`console.error($(JSON.stringify(error)))`)
            console.log('Error removing data from localStorage')
        }
        return result
    }

    // REMOVE DATA ASYNC FROM LOCAL STORAGE
    static removeAsync = async (key: string) => {
        return await new Promise((resolve, reject): void => {
            setTimeout((self: typeof LocalStorageManager, key: string): void => {
                const result = self.remove(key)
                result ? resolve(result) : reject(result)
            },
            0,
            this,
            key
            )
        })
    }

    // HAS DATA IN LOCAL STORAGE
    static has = (key: string) => {
        return Object.prototype.hasOwnProperty.call(window.localStorage, key)
    }

    // HAS DATA ASYNC IN LOCAL STORAGE
    static hasAsync = async (key: string) => {
        return await new Promise((resolve, reject): void => {
            setTimeout((self: typeof LocalStorageManager, key: string): void => {
                const result = self.has(key)
                result ? resolve(result) : reject(result)
            },
            0,
            this,
            key)
        })
    }
}