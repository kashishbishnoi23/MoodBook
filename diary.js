class Note{
    // individual note:
    constructor(title, content){
        this.title = title;
        this.content = content
        this.date = new Date();
        this.id = Date.now();
        this.createdAt = new Date();
        this.updatedAt = new Date(); // ye ham Date() object isliye banaya hai -> taki iske sare methods access kr skein -> 
        /*
        Example	Purpose
        note.createdAt.getFullYear()	Get year
        note.createdAt.getMonth()	Get month
        note.createdAt.getTime()	Get timestamp in milliseconds
        note.createdAt.toLocaleString()	Convert to local readable text

        jab local storage me store krayenge to ye date object -> ISO string ki form me store hoga 

        note.createdAt = Sat Oct 04 2025 23:09:45 GMT+0530 (India Standard Time)
        
        isliye, ham dobara naya Date() object banate hain -> and we format it to readable format using .toLocaleString()
        */
    }

    update(title, content){
        this.title = title;
        this.content = content;
        this.updatedAt = new Date();
    }
}




class Diary{
    constructor(){
        this.notes = [];
        this.loadfromlocalStorage();
    }

    addNote(title, content){
        const note = new Note(title, content);
        this.notes.push(note);
        this.saveToStorage();
        return note;
    }
    
    getNoteById(id){
       return this.notes.find(note => note.id == id);
    }

    updateNote(id, title, content){
      const note = this.notes.find(note => note.id == id);
      if (note){
      note.update(title, content);
      this.saveToStorage();
      }

    }

    deleteNote(id){
      this.notes = this.notes.filter(note => note.id != id);
      this.saveToStorage();
    }

    saveToStorage(){
        localStorage.setItem("DiaryNotes", JSON.stringify(this.notes));
    }

    loadfromlocalStorage(){
        const data = localStorage.getItem("DiaryNotes");
        if (data){
            const parsed = JSON.parse(data);
            this.notes = parsed.map(n => {
                const restored = new Note(n.title, n.content);
                restored.id = n.id;
                restored.date = new Date(n.date);
                restored.createdAt = new Date(n.createdAt);
                restored.updatedAt = new Date(n.updatedAt);
                return restored;
            });
            // why doing this?? -> cuz localStorage me actual Note objects store nahi hote => plain json object store hote hain , like note = {id:1, title: "Hi", content = "there"} -> ab isme methods jase ki update() store nahi hota -> to ab hame dobara inko Note object me convert krna padega -> parsed array ko iterate kro -> Object.assign() -> new Note() se naya object banayega aur note ke sare key-value pairs us naye Note instance me initialise kr dega
        }
    }


}



