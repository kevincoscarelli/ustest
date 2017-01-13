describe('Users factory', function(){
    var Users;
     // The array of users our factory will provide us
    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];

    var singleUser = userList[1];

    //beforeEach is a function that allows us to run code before each test we've written is executed.
    //The ngMock module provides support to inject and mock Angular services into unit tests.
    //#1 Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    //#2 Before each test set our injected Users factory(_Users_) to our local Users variable
    beforeEach(inject(function(_Users_){
        Users = _Users_;
    }));

    //A simple test to verify the Users factory is defined
    it('should exist', function(){
        expect(Users).toBeDefined();
    });

    //A set of tests for our Users.all() method.
    describe('.all()', function(){
        //A simple test to verify the method all exists.
        it('should exist', function(){
            expect(Users.all).toBeDefined();
        });

        //Test to verify that calling all() returns the array of users we hard-coded.
        it('should return a hard-coded list of users', function() {
            expect(Users.all()).toEqual(userList);
        });
    });

    //A set of tests for our Users.findById() method.
    describe('.findById()', function() {
        it('should exist', function() {
            expect(Users.findById).toBeDefined();
        });

        it('should return one user object if it exists', function() {
            expect(Users.findById('2')).toEqual(singleUser);
        });

        it('should return undefined if the user cannot be found', function() {
            expect(Users.findById('ABC')).not.toBeDefined();
        });
    });
});