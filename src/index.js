const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector
        ('input#searchByID');
        console.log(input.value);
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data=>{
            console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            title.textContent = data.title;
            document.body.append(title);
            const summary = document.querySelector('section#movieDetails p')
            summary.textContent = data.summary;
            document.body.append(summary);   
        });
        

  
    });
}

document.addEventListener('DOMContentLoaded', init);