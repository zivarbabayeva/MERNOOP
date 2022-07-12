//Encapsulation
class Book  
  {  
    constructor()  
    {  
       let name;  
       let pages; 
       let price; 
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getPages()  
      {  
        return this.pages;  
      }  
    setPages(pages)  
    {  
      this.pages=pages;  
    }  
    getPrices()  
      {  
        return this.prices;  
      }  
    setPrices(prices)  
    {  
      this.prices=prices;  
    }  
  }  
  let book=new Book();
  book.setName("Alchemist");
  book.setPages(100);
  book.setPrices(15) 
  document.writeln(book.getName()+" "+book.getPages() +" "+book.getPrices());
