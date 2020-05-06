# Project-01
Personal school project for WDM's javascript course.

# Informazioni generali
Il manager imposta un valore di X settimane, ovvero per quante volte dovrà essere stampata una lista di prodotti. Ogni settimana equivale a N secondi che vengono impostati sempre dal manager. Ogni settimana arrivano Y prodotti (generati randomicamente da un array di prodotti), per ogni prodotto viene impostato uno stato, un controllo (check), una data di scadenza, un ID etc.

# Idee
Una lista settimanale è rappresentata da un **array di oggetti**. Ogni oggetto è un prodotto che ha delle proprietà, generalizzate da un classe chiamata **Prodotto**. La lista viene periodicamente aggiornata ogni volta che finisce una settimana e ne inizia un'altra. 

Ci sarà quindi un ciclo principale che durerà N secondi e si ripeterà per X settimane. 

# To-dos
* [] Creare classe generica per prodotti
  * Nome
  * Stato
  * Checks
  * Costo (?) 
  * Peso
  * ID
  * Data scadenza
* [] Creare lista prodotti (Array)
* [] Creare funzione per estrarre un prodotto a caso da array
* [] Funzione per avere un unico ID 
* [] Funzione per generare data di scadenza
* [] Funzione per aggiungere zeri (es. 001 o 01) davanti a ID del prodotto
* [] Funzione per formattare la data
* [] Funzione per generare output dei prodotti
  * Deve avere padding che sono caratteri configurabili! 
* [] Creare un config object settabile dal manager con le info riguardanti il programma e la durata

