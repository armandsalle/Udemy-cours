const expect = require('expect');
const {Users} = require('./users');

describe('Users', ()=>{
  var users;

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React'
    }, {
      id: '3',
      name: 'Deb',
      room: 'Node'
    }];
  });

  it('Should add new user', ()=>{
    var users = new Users();
    var user = {
      id:'123',
      name: 'Armand',
      room: 'Room B'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
      var userId = '1';
      var user = users.removeUser(userId);

      expect(user.id).toBe(userId);
      expect(users.users.length).toBe(2);
    });

    it('Should not remove user', () => {
      var userId = '99';
      var user = users.removeUser(userId);

      expect(user).toBe(undefined);
      expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
      var userId = '2';
      var user = users.getUser(userId);

      expect(user.id).toBe(userId);
    });

    it('Should not find user', () => {
      var userId = '99';
      var user = users.getUser(userId);

      expect(user).toBe(undefined);
    });

    it('Should return names for node', ()=>{
      var userList = users.getUserList('Node');

      expect(userList).toEqual(['Mike', 'Deb']);
    });

    it('Should return names for react', ()=>{
      var userList = users.getUserList('React');

      expect(userList).toEqual(['Jen']);
    });

});
