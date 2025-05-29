const toSwitchTabs = (tabTrigger, tabContent) => {


    const tabMenu = document.querySelectorAll(tabTrigger);
    const tabPanel = document.querySelectorAll(tabContent);

    for (let i = 0; i < tabMenu.length; i++) {
        tabMenu[i].addEventListener("click", () => {
            const menuParent = tabMenu[i].parentNode;
            const panelParent = tabPanel[i].parentNode;
            const tabMenuAll = menuParent.querySelectorAll(".tab-menu__item");
            const tabPanelAll = panelParent.querySelectorAll(".panel");

            for (let i = 0; i < tabMenuAll.length; i++) {
                tabMenuAll[i].classList.remove("active");
                tabPanelAll[i].classList.remove("show");
            }

            tabMenu[i].classList.add("active");
            tabPanel[i].classList.add("show");
        });
    }


    // tabTrigger.forEach((item) => {
    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         console.log(e.target);
    //         item.contains(e.target);
    //         console.log(item.contains(e.target));
    //         const id = e.target.getAttribute('href').replace('#', '');

    //         tabTrigger.forEach((child) => child.classList.remove(activeBtn));
    //         tabContent.forEach((child) => child.classList.remove(activeContent));

    //         item.classList.add(activeBtn);
    //         document.getElementById(id).classList.add(activeContent);
    //     });
    // });
};

export default toSwitchTabs;

