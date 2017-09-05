// // Copyright IBM Corp. 2015,2016. All Rights Reserved.
// // Node module: loopback-example-access-control
// // This file is licensed under the Artistic License 2.0.
// // License text available at https://opensource.org/licenses/Artistic-2.0

// module.exports = function(app) {
//   var User = app.models.User;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;

//   User.create([
//     {username: 'John', email: 'john@doe.com', password: 'opensesame'},
//     {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
//     {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
// ], function(err, users) {
//     console.log(err);
//     if (err) return err;
//     //...
//     // Create projects, assign project owners and project team members
//     //...
//     // Create the admin role
//     Role.create({
//       name: 'admin'
//     }, function(err, role) {
//       console.log(err);
//       if (err) return err;

//       // Make Bob an admin
//       role.principals.create({
//         principalType: RoleMapping.USER,
//         principalId: users[2].id
//       }, function(err, principal) {
//         console.log(err);
//         if (err) return err;
//       });
//     });
//   });
// };