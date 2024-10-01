const data = [
    { percentage: '28%', text: 'der Deutschen schauen Spiele der diesjährigen Fußball-EM beim Public Viewing, Fanfest oder einer Fanmeile.', color: '#3498db' }, // Blau
    { percentage: '45%', text: 'der Menschen weltweit haben keinen Zugang zu grundlegenden sanitären Einrichtungen.', color: '#e74c3c' }, // Rot
    { percentage: '8%', text: 'der Erdoberfläche ist von Wüsten bedeckt.', color: '#f39c12' }, // Orange
    { percentage: '70%', text: 'des Sauerstoffs auf der Erde wird von Meerespflanzen produziert.', color: '#2ecc71' }, // Grün
    { percentage: '12%', text: 'der Bevölkerung haben eine Phobie vor dem Fliegen.', color: '#9b59b6' }, // Violett
    { percentage: '64%', text: 'der Erwachsenen trinken täglich mindestens eine Tasse Kaffee.', color: '#e67e22' }, // Dunkelorange
    { percentage: '20%', text: 'des weltweiten Energieverbrauchs wird durch erneuerbare Energien gedeckt.', color: '#1abc9c' }, // Türkis
    { percentage: '40%', text: 'der Deutschen nutzen regelmäßig öffentliche Verkehrsmittel.', color: '#34495e' }, // Dunkelblau
    { percentage: '33%', text: 'der Menschen haben mindestens einmal in ihrem Leben einen Knochenbruch erlitten.', color: '#e67e22' }, // Dunkelorange
    { percentage: '90%', text: 'der Bevölkerung weltweit leben auf der nördlichen Hemisphäre.', color: '#9b59b6' }, // Violett
    { percentage: '15%', text: 'der Deutschen rauchen täglich Zigaretten.', color: '#c0392b' }, // Dunkelrot
    { percentage: '85%', text: 'des weltweiten Trinkwassers wird aus Flüssen und Seen gewonnen.', color: '#2980b9' }, // Dunkelblau
    { percentage: '50%', text: 'der Deutschen nutzen Social Media täglich.', color: '#2ecc71' }, // Grün
    { percentage: '25%', text: 'der Menschen weltweit haben Angst vor Spinnen.', color: '#8e44ad' }, // Dunkelviolett
    { percentage: '77%', text: 'der Deutschen trinken mindestens einmal im Monat Alkohol.', color: '#e74c3c' }, // Rot
    { percentage: '18%', text: 'der Erdoberfläche sind mit Wald bedeckt.', color: '#27ae60' }, // Dunkelgrün
    { percentage: '22%', text: 'der Deutschen sind Vegetarier.', color: '#16a085' }, // Türkisgrün
    { percentage: '60%', text: 'des menschlichen Körpers besteht aus Wasser.', color: '#2980b9' }, // Dunkelblau
    { percentage: '35%', text: 'der Menschen haben Flugangst.', color: '#f39c12' }, // Orange
    { percentage: '13%', text: 'der weltweiten Bevölkerung leidet an Fettleibigkeit.', color: '#e74c3c' }, // Rot
    { percentage: '50%', text: 'der Deutschen arbeiten überwiegend im Homeoffice.', color: '#3498db' }, // Blau
    { percentage: '30%', text: 'der Weltbevölkerung hat keinen Zugang zu sauberem Trinkwasser.', color: '#e74c3c' }, // Rot
    { percentage: '6%', text: 'der deutschen Haushalte haben keine Internetverbindung.', color: '#f39c12' }, // Orange
    { percentage: '80%', text: 'des weltweiten Energieverbrauchs stammt aus fossilen Brennstoffen.', color: '#2ecc71' }, // Grün
    { percentage: '14%', text: 'der Erwachsenen in Deutschland leiden an Diabetes.', color: '#9b59b6' }, // Violett
    { percentage: '58%', text: 'der Kinder weltweit besuchen keine weiterführende Schule.', color: '#e67e22' }, // Dunkelorange
    { percentage: '23%', text: 'der deutschen Bevölkerung sind Nichtraucher.', color: '#1abc9c' }, // Türkis
    { percentage: '42%', text: 'der Deutschen besitzen ein Fahrrad, das sie regelmäßig nutzen.', color: '#34495e' }, // Dunkelblau
    { percentage: '9%', text: 'der Erwachsenen haben eine ausgeprägte Höhenangst.', color: '#e67e22' }, // Dunkelorange
    { percentage: '67%', text: 'der Erdoberfläche ist von Wasser bedeckt.', color: '#3498db' }, // Blau
    { percentage: '11%', text: 'der Deutschen sind von einer Lebensmittelunverträglichkeit betroffen.', color: '#c0392b' }, // Dunkelrot
    { percentage: '54%', text: 'der Menschen weltweit leben in städtischen Gebieten.', color: '#2980b9' }, // Dunkelblau
    { percentage: '41%', text: 'der Deutschen haben eine Mitgliedschaft in einem Fitnessstudio.', color: '#2ecc71' }, // Grün
    { percentage: '27%', text: 'der Bevölkerung weltweit sind Vegetarier oder Veganer.', color: '#8e44ad' }, // Dunkelviolett
    { percentage: '72%', text: 'der Deutschen besitzen einen Führerschein.', color: '#e74c3c' }, // Rot
    { percentage: '19%', text: 'der Erwachsenen in Deutschland sind stark übergewichtig.', color: '#27ae60' }, // Dunkelgrün
    { percentage: '48%', text: 'der Menschen weltweit besitzen ein Smartphone.', color: '#16a085' }, // Türkisgrün
    { percentage: '66%', text: 'der Jugendlichen weltweit nutzen soziale Medien.', color: '#2980b9' }, // Dunkelblau
    { percentage: '34%', text: 'der Deutschen nutzen regelmäßig öffentliche Verkehrsmittel.', color: '#f39c12' }, // Orange
    { percentage: '17%', text: 'der deutschen Bevölkerung leidet unter Schlafstörungen.', color: '#e74c3c' }, // Rot
    { percentage: '82%', text: 'der Deutschen besitzen ein Auto.', color: '#2ecc71' }, // Grün
    { percentage: '5%', text: 'der Deutschen sind Selbstversorger im Bereich Nahrungsmittel.', color: '#9b59b6' }, // Violett
    { percentage: '38%', text: 'der Menschen weltweit haben Zugang zu einer kostenlosen Gesundheitsversorgung.', color: '#e67e22' }, // Dunkelorange
    { percentage: '10%', text: 'der Weltbevölkerung leidet an extremem Hunger.', color: '#c0392b' }, // Dunkelrot
    { percentage: '56%', text: 'der Deutschen reisen mindestens einmal im Jahr ins Ausland.', color: '#3498db' }, // Blau
    { percentage: '21%', text: 'der Menschen weltweit können nicht lesen und schreiben.', color: '#e74c3c' }, // Rot
    { percentage: '76%', text: 'der Deutschen bevorzugen frische Lebensmittel.', color: '#27ae60' }, // Dunkelgrün
    { percentage: '31%', text: 'der Deutschen haben Haustiere.', color: '#16a085' }, // Türkisgrün
    { percentage: '87%', text: 'der Deutschen sind mit ihrer Lebensqualität zufrieden.', color: '#2ecc71' }  // Grün
];