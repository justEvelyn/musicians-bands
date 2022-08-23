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
        
       testBand = await Band.create ({
            name: '5 seconds of summer',
            genre: 'pop'
                })
           
        expect(testBand.genre).toBe('pop');
    })

    test('can create a Musician', async () => {
         
        testMusician = await Musician.create ({
        name: 'Bruno',
        instrument: 'guitar'
            })

        expect(testMusician.name).toBe('Bruno');
    })
})

test('Band can have many muscians', async () => {


    const testMusician1 = await Musician.create ({
        name: 'beyonce',
        instrument: 'piano'
            })
          await testBand.addMusician(testMusician)
           await testBand.addMusicians(testMusician1)
                

const testy = await testBand.getMusicians()

            
            expect(testy.length).toBe(2);
        })
    