window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabcontainer');

    function tabHideContent(){
        tabsContent.forEach(item =>{
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function tabShowContent (i = 0) {// i по defoult = 0
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    tabHideContent();
    tabShowContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            console.log(target);
            tabs.forEach((item, i) => {
                if (target == item) {
                    tabHideContent();
                    tabShowContent(i);
                }
            });
        }
    });
}); 