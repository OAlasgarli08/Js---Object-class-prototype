'use strict';




let stu1 = {
    id: 1,
    fullname: 'Student1',
    age: 16,
    address: 'address1'
};

let stu2 = {
    id: 2,
    fullname: 'Student2',
    age: 17,
    address: 'address2'
};

let stu3 = {
    id: 3,
    fullName: 'Student3',
    age: 15,
    address: 'address3'
};



let group = {
    name: 'group1',
    capacity: 3,
    students: [],
    addStudent: function (stu) {
        if (stu === undefined ){
            alert('Input cannot be empty');
            return
        }

        if (this.students.length >= this.capacity) {
            alert('Group already full');
            return
        }

        this.students.push(stu);
    },

    removeStudent: function (stu) {
        if (stu === undefined ){
            alert('Input cannot be empty');
            return
        }


        this.students.splice(stu, 1);
    },

    searchStudent: function (search, students){
       return students.filter(student => student.fullName.toLowerCase().trim().includes(search.toLowerCase().trim()))
    },

    getById: function (id,students){
        students.forEach(student => {
            if (student.id == id){
                console.log(`${student.id} + ${student.age} + ${student.address}`);
            }
        });
        
    },

    getAllStudents: function(){
        return this.students;
    }


};


group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);


group.removeStudent(stu1);
let result = group.getAllStudents();
group.getById(2,group.students);

// console.log(result);

