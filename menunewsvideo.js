import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";

// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --foregroundColour: var(--color-stone-950);
            --hoverColour:      var(--color-purple-500);
        }

        #image {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }

        img {
            object-fit: cover;
        }

    /*  ╭──────────────────────────────────────────────────────────╮
        │                       HOVER STATES                       │
        ╰──────────────────────────────────────────────────────────╯ */

        #menunewsvideo:hover #image {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }


    /*  ╭──────────────────────────────────────────────────────────╮
        │                       MEDIA QUERIES                      │
        ╰──────────────────────────────────────────────────────────╯ */


    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`
    <a id="menunewsvideo" href="" rel="" title="" target="" class="
        relative
        flex
        flex-row                    md:flex-col
        gap-4                       md:gap-2
        
        rounded-lg
        shadow-lg
        overflow-hidden
        h-full
        
        duration-500
        ease-in-out
        hover:outline
        outline-4
        outline-white
        ">

            <div id="image" class="
                rounded-lg
                m-auto
                z-30 
                object-fit
                h-full
                w-full
                ">
                <slot></slot>
            </div>

            <svg class="
            absolute
            w-2/5
            h-2/5
            top-1/2 
            left-1/2
            transform 
            -translate-x-1/2 
            -translate-y-1/2
            fill-white
            opacity-90
            z-40" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>
    </a>


`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class MenuNewsVideo extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        // define element
        const element = this.shadowRoot.querySelector("#menunewsvideo");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;

    }

    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯

    get classAttribute() {
        return this.classList;
    }

    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }


}

customElements.define("ldnpk-menunewsvideo", MenuNewsVideo);