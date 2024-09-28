class Welcome {
    constructor(){
        this.logoImage = "./assets/title.png";
        this.logo = createImg(this.logoImage, "gameTitle");
        
        this.teacherButton = createButton("Maestra");
        this.studentButton = createButton("Studiante");
    }

    hideElements(){
        this.teacherButton.hide();
        this.studentButton.hide();
    }

    setElementPosition(){
        this.logo.position(100, 100);
        this.teacherButton.position(width / 2.3, height / 2 - 100);
        this.studentButton.position(width / 2.3, height / 2);
    }
    
    setElementStyle(){
        this.logo.class("gameTitle");
        this.teacherButton.class("customButton");
        this.studentButton.class("customButton");
    }

    handelOnpress(){
        this.teacherButton.mousePressed(() =>{
            this.hideElements();
            teacher.display();
        });

        this.studentButton.mousePressed(() =>{
            this.hideElements();
            student.display();
        });
    }

    display(){  
        this.setElementStyle();
        this.setElementPosition();
        this.handelOnpress();
    }
}