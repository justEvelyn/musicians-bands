const {db} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        
        const testBand = await Band.create ({
            name: '5 seconds of summer',
            instrument: 'guitar'
                })
           
        expect(testBand.instrument).toBe('guitar');
    })

    test('can create a Musician', async () => {
         
       const testMusician = await Musician.create ({
        name: 'Bruno',
        instrument: 'guitar'
            })

        expect(testMusician.name).toBe('Bruno');
    })
})