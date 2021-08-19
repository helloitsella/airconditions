const texts = document.getElementById('texts');
            const buttons = document.querySelectorAll('button');
            
            for (const b of buttons){
                b.addEventListener('click', () => {
                    console.log('you selected', b.id);
                        texts.innerHTML = `<embed src='/ac/${b.id}.html'>`
            })};