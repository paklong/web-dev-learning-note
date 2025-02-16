class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = Array.from({length:this.capacity}, ()=>[]); 
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const bucketNum = this.hash(key);
        const targetBucket = this.buckets[bucketNum]; 
        if (targetBucket.length === 0) {
            //console.log('This is a empty bucket');
            targetBucket.push([key, value]);
            return;
        }
        for (const subArray of targetBucket) {
            if (subArray[0] === key) {
                //console.log('Find a match');
                subArray[1] = value;
                return;
            }
        }
        //console.log('There is no match');
        targetBucket.push([key, value]);
        return;
    }

    has(key) {
        const bucketNum = this.hash(key);
        const targetBucket = this.buckets[bucketNum]; 
        if (targetBucket.length === 0) {
            console.log('This is a empty bucket');
            return false;
        }
        for (const subArray of targetBucket) {
            if (subArray[0] === key) {
                console.log('Find a match');
                return true;
            }
        }
        console.log('There is no match');
        return false;
    }

    remove(key) {
        if (this.has(key)) {
            const bucketNum = this.hash(key);
            const targetBucket = this.buckets[bucketNum];
            targetBucket.forEach((subArray, index) => {
                if (subArray[0] == key) {
                    targetBucket.splice(index, 1);
                    return true;
                }
            });
//            for (let i = 0; i < targetBucket.length; i++) {
//                if (targetBucket[i][0] == key) {
//                    targetBucket.splice(i, 1);
//                    return true;
//                }
//            }
        }
        return false;
    }

    length() {
        let count = 0;
        for (const subArry of this.buckets) {
            for (const item of subArry) {
                count++;
            }
        }
        return count;
    }

    lengthRe(data=this.buckets, count=0) {
        if (!Array.isArray(data)) {
            return count + 1;
        }
        for (const item of data) {
            count = this.lengthRe(item, count);
        }
        return count;
    }

    clear() {
        this.buckets = Array.from({length:this.capacity}, ()=>[]); 
    }

}

function test() {
    const hashMap = new HashMap();
//    console.log(hashMap.hash('Anson'));
    hashMap.set('Anson', 'Good');
    hashMap.set('Anson', 'Very Good');
    hashMap.set('Aak', 'Good');
    hashMap.set('Vak', 'Good');
    hashMap.set('Hak', 'Good');
    hashMap.set('Tak', 'Good');
    hashMap.set('Qak', 'Good');
    hashMap.set('Uak', 'Good');
    hashMap.set('Lak', 'Good');
    hashMap.set('Oak', 'Good');
    hashMap.set('Cak', 'Good');
    hashMap.set('Kak', 'Good');
    hashMap.set('Aak', 'Good');
//    console.log(hashMap.buckets);
    hashMap.remove('Aak');
    hashMap.remove('FFF');
    console.log(hashMap.buckets);
    console.log(`Expect ${hashMap.length()} to be ${10}`)
    hashMap.clear();
    console.log(`Expect ${hashMap.buckets} to be empty`)
}

test();
