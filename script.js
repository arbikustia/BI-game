class Start{
    constructor() {
        this.playerName = "PLAYER";
        this.botName = "COMPUTER"
        this.playerOption;
        this.botOption;
        this.winner ="";
        
    }

    get getBotOption(){
        return this.botOption;
    }

    set setBotOption(option){
        this.botOption = option;
    }

    get getPlayerOption(){
        return this.playerOption;
    }

    set setPlayerOption(option){
        this.playerOption = option;
    }

    botBrain(){
        const option = ["🖐️","✌️","✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }




    winCalculation(){
        if( this.botOption == "🖐️" && this.playerOption == "✌️" ){
            return this.winner = this.playerName;
        }else if( this.botOption == "🖐️" && this.playerOption == "✊"  ){
            return this.winner = this.botName;
        }else if( this.botOption == "✌️" && this.playerOption == "🖐️"  ){
            return this.winner = this.botName;
        }else if( this.botOption == "✌️" && this.playerOption == "✊"  ){
            return this.winner = this.playerName;
        }else if( this.botOption == "✊" && this.playerOption == "🖐️"  ){
            return this.winner = this.playerName;
        }else if( this.botOption == "✊" && this.playerOption == "✌️"  ){
            return this.winner = this.botName;
        }else{
            return this.winner = "SERI"
        }
    }

    matchResult(){
        if( this.winner != "SERI"){
            return `${this.winner} MENANG `;
        }else{
            return `YAHH ${this.winner}, GK ADA YANG MENANG `
        }
    }

}





function pickOption(params){
    const start = new Start();
    start.setBotOption = start.botBrain();
    start.setPlayerOption = params;
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "....."
    result.textContent = "....."
    

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption}   VS ${start.getBotOption}`;
        result.textContent = start.matchResult();
    },1500)

}