// const modal = () => {
    const modalSearch = document.querySelector('.search-model');
    const modalSearchOpen = document.querySelector('.icon_search');
    const modalSearchClose = modalSearch.querySelector('.search-close-switch');
    const modalSearchInput = modalSearch.querySelector('#search-input');

    const modalSearchAnime = () => {
     if (modalSearch.classList.contains('active')) {
                modalSearch.classList.remove('active')
            } else {
                modalSearch.classList.add('active')
            }
        }
        
    const modalSearchopen = () => {
        modalSearchOpen.addEventListener("click", () => {
            modalSearchAnime()
        });
    }
    modalSearchClose.addEventListener("click", () => {
        modalSearchAnime()
    });
    modalSearchInput.addEventListener('input', () => {
        console.log(modalSearchInput.value);
    })


modalSearchopen();

//     modalBtn.addEventListener('click', () => {
//         modal.style.display = 'block'
//     })

//     modalClose.addEventListener('click', () => {
//         modal.style.display = 'none'
//     })
// }

// modal()