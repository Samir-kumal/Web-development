



  const url = 'http://universities.hipolabs.com/search?country=United+States';
  http = new XMLHttpRequest();
  http.onreadystatechange =  () => {
    if(this.readyState == 4 && this.readyState == 200){
      console.log(this.responseText);
    }
    
  }
  http.open('GET',url, true);
  http.send()


