class DiaryNote{
    constructor(text, subject){
        this.text = text;
        this.subject = subject;
        this.date = new Date();
        this.id = Date.now();
    }
}


function LoadNotes(){
    const notesContainer = document.querySelector(".notesContainer");
    notesContainer.innerHTML = "";

    // let notes = [
    //      { date: "14/04", title: "Feeling anxious", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam nihil alias suscipit, quo libero beatae, perferendis aliquam, accusantium qui harum nisi deleniti. Nam cupiditate reiciendis odio maxime, temporibus, autem vel quis, provident ab nisi labore consectetur. Ducimus atque" },

    //      { date: "15/04", title: "Happy day", content: "Had a great walk...Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam nihil alias suscipit, quo libero beatae, perferendis aliquam, accusantium qui harum nisi deleniti. Nam cupiditate reiciendis odio maxime, temporibus, autem vel quis, provident ab nisi labore consectetur. Ducimus atque" }
    // ]

    // localStorage.setItem("diaryNotes", JSON.stringify(notes));
    let notes = JSON.parse(localStorage.getItem("diaryNotes"));

    // '{"date":"14/04","title":"Feeling anxious","content":"Lorem ipsum..."}' -> stored in form of String => has to be converted back to JSON object

    notes.map((note, index) => 
            notesContainer.innerHTML += `
    <div style="height:300px; width:500px" class="shadow-lg flex p-10 flex-col items-start gap-5  rounded-2xl">

        <div class="text-purple-600 font-semibold text-2xl "> ${note.date} </div>

        <div class="title text-xl text-gray-600 font-semibold">${note.title}</div>

        <div class="text-gray-400">${note.content}</div>
        
    </div>
    `
    )


}

LoadNotes();