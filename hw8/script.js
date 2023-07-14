class Student {
    constructor (university, course, fullName,) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks=[]
        this.dismissed = false
    }
  
    getInfo() {
        return 'Cтудент ' + this.course +'го курсу ' + this.university + ', ' + this.fullName
    }
    get marks (){
        return this._marks;
    }
    set marks(value){
        if (!this.dismissed) {
        this._marks.push(value);
        }
    }
    getAverageMark () {
        let sum = 0;
        if (this.marks !=null) {
        for (let i=0;i<this.marks.length; i++){ 
            sum += this.marks[i];
        }

        return sum / this.marks.length;
    } 
      else {
      return null
      }
    }

    dismiss() {
        this.dismissed = true;
        this._marks = null;
      }
    
      recover() {
        this.dismissed = false;
        this._marks = [];
      }
    
    }
    

let person2 = new Student ('TNMU', 2, 'Vladyslav Levitskiy')
console.log(person2.getInfo())
person2.marks = 1
person2.marks = 2
console.log(person2.marks)
console.log(person2.getAverageMark ())
person2.dismiss()
person2.marks = 3
console.log(person2.marks)
console.log(person2.getAverageMark ()) 
person2.recover()
person2.marks = 3
person2.marks = 4
console.log(person2.marks)
console.log(person2.getAverageMark ()) 



