import { removeDocumentScrollBlocker } from "../ui/documentScrollBlocker.js";

export const scrollIntoView = ($selector) => {
    const $links = document.querySelectorAll($selector);

    $links.forEach(($link) => {
        let hrefId = null;
        let $target = null;
        const hrefAttr = $link.getAttribute("href");
        const hrefStartIndex = $link.getAttribute("href").indexOf("#");

        if (hrefStartIndex !== -1) {
            hrefId = hrefAttr.slice(hrefStartIndex);
        }

        if (hrefId && hrefId !== "#") {
            $target = document.querySelector(hrefId);

            if (hrefId.length > 1 && $target) {
                $link.addEventListener("click", (e) => {
                    e.preventDefault();

                    document.body.classList.remove("menu_opened");
                    removeDocumentScrollBlocker(".header");

                    $target.scrollIntoView({
                        behavior: "smooth",
                    });
                });
            }
        }
    });
};
