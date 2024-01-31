import{useReducedMotion as e,AnimatePresence as r,motion as a}from"framer-motion";import{ChevronLeft as t,X as o,Loader2 as n,Check as s}from"lucide-react";import{useRouter as i,usePathname as l}from"next/navigation";import{useRef as d,useEffect as c,Fragment as b}from"react";import{jsx as u,jsxs as f,Fragment as m}from"react/jsx-runtime";import p from"next/link";import{mediaQueries as k}from"tailwind-mq";function g(n){var s=n.show,l=n.setShow,b=n.type,p=n.buttonLabel,k=n.children,g=i(),h=d(null),v=e(),x=function(){l&&(l(!1),document.removeEventListener("keydown",w),setTimeout((function(){var e;null===(e=h.current)||void 0===e||e.close(),document.body.style.overflow="auto"}),v?350:500))},y=function(){var e;g.back(),null===(e=h.current)||void 0===e||e.close(),document.body.style.overflow="auto",document.removeEventListener("keydown",w)},w=function(e){"Escape"===e.key&&(e.preventDefault(),"close"!==b?"back"!==b||y():x())};return c((function(){var e;("back"===b||s)&&(null===(e=h.current)||void 0===e||e.showModal(),document.body.style.overflow="hidden",document.addEventListener("keydown",w))}),[s]),u("dialog",{role:"dialog","aria-modal":"true",ref:h,className:"backdrop:bg-transparent",children:u(r,{children:("back"===b||s)&&f(m,{children:[u(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35,bounce:.3,type:"spring"},className:"fixed inset-0 bg-base-200/70 backdrop-blur transparency-reduce:bg-base-200 transparency-reduce:backdrop-blur-none dark:bg-base-dark-800/70 dark:transparency-reduce:bg-base-dark-800"}),f(a.div,{initial:{y:v?0:-600,opacity:0},animate:{y:0,opacity:1},exit:{y:v?0:600,opacity:0},transition:{duration:v?.35:.5,bounce:.3,type:"spring"},className:"fixed inset-0 m-auto my-auto flex h-fit max-h-fullScreenOverlay w-11/12 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-base-300 bg-base-50 shadow-xl dark:border-base-dark-700 dark:bg-base-dark-950 sm:w-[36rem]",children:[u("div",{className:"relative w-full overflow-y-auto p-7 pb-[5.5rem]",children:k}),u("div",{className:"absolute bottom-0 z-10 flex w-full items-center justify-center border-t border-base-300 bg-base-50/50 backdrop-blur transparency-reduce:bg-base-50 transparency-reduce:backdrop-blur-none dark:border-base-dark-700 dark:bg-base-dark-950/50 dark:transparency-reduce:bg-base-dark-950",children:f("button",{type:"button",className:"peer relative mx-auto mb-4 mt-3 flex w-fit select-none items-center gap-1 rounded-lg p-2 text-sm font-semibold text-base-800 text-opacity-50 transition-all hover:bg-base-400/20 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:text-base-dark-200 dark:text-opacity-50 dark:hover:bg-base-dark-600/20 dark:focus-visible:ring-offset-body-dark",onClick:"back"===b?y:x,children:["back"===b&&u(t,{size:20}),"close"===b&&u(o,{size:20}),f("span",{className:"pr-0.5",children:["back"===b&&(null!=p?p:"이전 페이지로"),"close"===b&&(null!=p?p:"닫기")]})]})})]})]})})})}function h(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function v(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?h(Object(a),!0).forEach((function(r){y(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function x(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var t=a.call(e,r||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function y(e,r,a){return(r=x(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function w(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return r.join(" ")}function N(e){var r,a;if(e.circle)return u(j,{circle:!0,size:e.size});if("characters"in e)return u(j,v({},e));var t="count"in e&&e.lines<=1?b:"span",o=Math.floor(null!==(r=e.lines)&&void 0!==r?r:1),n=(null!==(a=e.lines)&&void 0!==a?a:1)-o;return f(t,v(v({},"span"===t?{className:"flex flex-col w-full"}:{}),{},{children:[Array(null!=o?o:1).fill(0).map((function(r,a){return u(j,{textClass:e.textClass,proportion:1},a)})),n>0&&u(j,{textClass:e.textClass,proportion:n})]}))}function j(e){var r=e.circle?void 0:{"text-xs":1,"text-sm":1.25,"text-base":1.5,"text-lg":1.75,"text-xl":1.75,"text-2xl":2,"text-3xl":2.25,"text-4xl":2.5}[e.textClass]-.5;return u("span",{className:w("select-none bg-base-900/15 motion-safe:animate-pulse dark:bg-base-dark-100/15",e.circle?"flex flex-none rounded-full":w("my-1 inline-flex rounded-md","proportion"in e&&1===e.proportion?"w-full":"")),style:v({},e.circle?{width:"".concat(e.size,"rem"),height:"".concat(e.size,"rem")}:v(v({lineHeight:"".concat(r,"rem")},"proportion"in e&&1!==e.proportion?{width:"".concat(100*e.proportion,"%")}:{}),"characters"in e?{width:"".concat(e.characters,"ch")}:{})),children:u("br",{})})}function O(e){var r=e.primary,a=e.isLoading,t=e.disabled,o=e.icon,s=e.text,i=e.onClick,l=e.href,d=e.newTab;return f(l?p:"button",{href:a||t?"":null!=l?l:"",rel:d?"noopener noreferrer":void 0,target:d?"_blank":void 0,type:l?void 0:"button",className:w("flex w-full flex-grow select-none items-center justify-center rounded-lg border px-4 py-2 font-medium shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:focus-visible:ring-offset-body-dark",r?"border-primary-600 bg-primary-600 text-base-50 dark:border-primary-400 dark:bg-primary-400 dark:text-base-dark-950":"border-base-300 bg-white text-base-800 dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200",a||t?"cursor-not-allowed opacity-50":r?"transition-all hover:border-primary-700 hover:bg-primary-700 active:scale-95 dark:hover:border-primary-300 dark:hover:bg-primary-300":"transition-all hover:bg-base-100 active:scale-95 dark:hover:bg-base-dark-800"),onClick:i,disabled:a||t,children:[a?u(n,{className:"mr-1 flex-none animate-spin"}):o&&u(o,{className:"mr-1 flex-none"}),s&&u("span",{className:"ml-1 mr-1 text-center leading-5",children:s})]})}function z(e){var r=e.as,a=e.text,t=e.htmlFor,o=e.required;return f(r,{htmlFor:t,className:"mr-1 flex-grow cursor-default leading-tight text-base-700 dark:text-base-dark-300",children:[a,o&&u("span",{className:"ml-0.5 text-red-500","aria-hidden":!0,children:"*"}),o&&u("span",{className:"sr-only",children:"필수 입력 항목"})]})}function C(e){var r=e.text,a=e.htmlFor,t=e.disabled,o=e.as,n=e.required;return f(o,{htmlFor:a,className:w("flex-1 font-medium text-base-900 dark:text-base-dark-100",t?"cursor-not-allowed opacity-50":"cursor-pointer"),children:[r,n&&u("span",{className:"ml-0.5 text-red-500","aria-hidden":!0,children:"*"}),n&&u("span",{className:"sr-only",children:"필수 입력 항목"})]})}function q(e){var r=e.text,a=e.disabled,t=e.className;return u("p",{className:w("text-sm text-base-500 dark:text-base-dark-500",null!=t?t:"",a?"opacity-50":""),children:r})}function L(e){var r=e.text;return u("span",{role:"alert",className:"ml-auto text-right leading-tight text-red-500 motion-safe:animate-shake",children:r})}function F(e){var r=e.title,a=e.description,t=e.disabled,o=e.isOn,n=e.setIsOn;return f("div",{className:"flex w-full -translate-x-[0.0625rem] flex-col",children:[f("label",{className:"group flex items-center justify-between gap-1.5",children:[u(C,{as:"span",text:r,disabled:t}),u("input",{type:"checkbox",className:"peer size-0",checked:o,onChange:function(e){return n(e.target.checked)},disabled:t}),u("span",{className:w("relative h-6 w-10 rounded-full border border-base-300 bg-white text-base-800 shadow-sm transition-all after:absolute after:top-1 after:h-4 after:w-4 after:-translate-y-[0.0625rem] after:translate-x-1 after:rounded-full after:bg-base-300 after:transition-all focus:outline-none peer-checked:after:translate-x-[1.125rem] peer-checked:after:border-primary-600 peer-checked:after:bg-primary-600 peer-checked:after:text-base-50 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:after:bg-base-dark-700  dark:peer-checked:after:border-primary-400 dark:peer-checked:after:bg-primary-400 dark:peer-checked:after:text-base-dark-950  dark:peer-focus-visible:ring-offset-body-dark",t?"cursor-not-allowed opacity-50":"cursor-pointer group-hover:after:translate-x-1.5 group-hover:after:bg-base-400 group-active:after:scale-90 group-hover:peer-checked:after:translate-x-4 group-hover:peer-checked:after:border-primary-700 group-hover:peer-checked:after:bg-primary-700 dark:group-hover:after:bg-base-dark-600 dark:group-hover:peer-checked:after:border-primary-300 dark:group-hover:peer-checked:after:bg-primary-300")})]}),a&&u(q,{text:a,disabled:t})]})}function S(e){var r=e.register,a=e.options,t=e.title,o=e.description,n=e.name;return f("div",{className:"flex w-full flex-col transition-opacity",children:[f("div",{className:w("group flex items-center justify-between gap-1.5",null!=a&&a.disabled?"cursor-not-allowed":"cursor-pointer"),children:[f("div",{className:w("relative size-5",null!=a&&a.disabled?"opacity-50":"transition-transform group-active:scale-90"),children:[u("input",v(v({},r(n,a)),{},{type:"checkbox",id:n,className:"peer size-full cursor-pointer appearance-none rounded-lg border border-base-300 bg-white text-base-800 shadow-sm transition-all checked:border-primary-600 checked:bg-primary-600 checked:text-base-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body enabled:hover:bg-base-100 enabled:checked:hover:border-primary-700 enabled:checked:hover:bg-primary-700 disabled:cursor-not-allowed dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:checked:border-primary-400 dark:checked:bg-primary-400 dark:checked:text-base-dark-950 dark:focus-visible:ring-offset-body-dark enabled:dark:hover:bg-base-dark-800 dark:enabled:checked:hover:border-primary-300 dark:enabled:checked:hover:bg-primary-300"})),u(s,{size:14,strokeWidth:4,className:"transition-opcity pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-50 opacity-0 peer-checked:opacity-100 dark:text-base-dark-950"})]}),u(C,{as:"label",text:t,htmlFor:n,disabled:null==a?void 0:a.disabled,required:!(null==a||!a.required)})]}),o&&u(q,{text:o,className:"ml-[1.625rem]",disabled:null==a?void 0:a.disabled})]})}function M(e){var r=e.register,a=e.name,t=e.options,o=e.items,n=e.title,s=e.gridCols,i=e.error;return f("div",{className:w("flex w-full flex-col",null!=t&&t.disabled?"opacity-50":""),children:[f("div",{className:"mb-1 flex flex-wrap justify-between px-1 text-sm font-medium",children:[u(z,{as:"span",text:n,required:!(null==t||!t.required)}),i&&u(L,{text:i})]}),u("fieldset",{disabled:null==t?void 0:t.disabled,"aria-invalid":!!i,className:w("grid gap-1.5 rounded-lg border border-base-300 bg-white p-2 pb-1.5 text-base-800 shadow-sm dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200",i?"outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark":"",s),children:o.map((function(e,o){return u(P,{register:r,options:t,item:e,name:a},o)}))})]})}function P(e){var r=e.register,a=e.name,t=e.options,o=e.item,n=o.value,s=o.icon;return f("label",{className:w("group flex flex-col gap-1",null!=t&&t.disabled?"cursor-not-allowed":"cursor-pointer transition-all active:scale-95"),children:[f("div",{className:"relative",children:[u("input",v(v({},r(a,t)),{},{className:"peer flex h-11 w-full appearance-none items-center justify-center rounded border border-base-300 bg-white text-base-800 shadow-sm transition-all checked:border-primary-600 checked:bg-primary-600 checked:text-base-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body enabled:cursor-pointer disabled:cursor-not-allowed enabled:group-hover:bg-base-100 enabled:group-hover:checked:border-primary-700 enabled:group-hover:checked:bg-primary-700 dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:checked:border-primary-400 dark:checked:bg-primary-400 dark:checked:text-base-dark-950 dark:focus-visible:ring-offset-body-dark dark:enabled:group-hover:bg-base-dark-800 dark:enabled:group-hover:checked:border-primary-300 dark:enabled:group-hover:checked:bg-primary-300",value:n,type:"radio"})),u(s,{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-800 peer-checked:text-base-50 dark:text-base-dark-200 dark:peer-checked:text-base-dark-950",size:20})]}),u("div",{className:"px-0.5 text-center text-xs font-medium text-base-500 dark:text-base-dark-500",children:n})]})}function B(e){var r=e.register,a=e.name,t=e.options,o=e.title,n=e.rows,s=e.placeholder,i=e.error;return f("div",{className:"flex w-full flex-col",children:[f("div",{className:w("mb-1 flex flex-wrap justify-between px-1 text-sm font-medium",null!=t&&t.disabled?"opacity-50":""),children:[u(z,{as:"label",text:o,htmlFor:a,required:!(null==t||!t.required)}),i&&u(L,{text:i})]}),u("textarea",v(v({},r(a,t)),{},{"aria-invalid":!!i,rows:n,id:a,placeholder:s,className:w("w-full resize-none rounded-lg border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body disabled:cursor-not-allowed disabled:opacity-50 dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 dark:focus-visible:ring-offset-body-dark enabled:[&:not(&:focus-visible)]:hover:bg-base-100 dark:enabled:[&:not(&:focus-visible)]:hover:bg-base-dark-800",i?"outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark":"")}))]})}function T(e){var r=e.register,a=e.name,t=e.options,o=e.type,n=e.title,s=e.placeholder,i=e.prefix,l=e.suffix,d=e.error,c=(null!=i?i:l)?"div":b;return f("div",{className:"flex w-full flex-col",children:[f("div",{className:w("mb-1 flex flex-wrap justify-between px-1 text-sm font-medium",null!=t&&t.disabled?"opacity-50":""),children:[u(z,{as:"label",text:n,htmlFor:a,required:!(null==t||!t.required)}),d&&u(L,{text:d})]}),f(c,v(v({},c===b?{}:{className:w("rounded-lg shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2 focus-within:ring-offset-body focus:outline-none dark:focus-within:ring-offset-body-dark flex transition-all",d?"outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark":"",null!=t&&t.disabled?"cursor-not-allowed opacity-50":"")}),{},{children:[i&&u("span",{className:"flex flex-none select-none items-center justify-center rounded-l-lg border border-r-0 border-base-300 bg-base-100 px-3 pb-0.5 text-sm text-base-600 dark:border-base-dark-700 dark:bg-base-dark-800 dark:text-base-dark-400",children:i}),u("input",v(v({},r(a,t)),{},{type:o,inputMode:"number"===o?"numeric":o,id:a,"aria-invalid":!!d,className:w("w-full border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 transition-all focus:outline-none dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 enabled:[&:not(&:focus-visible)]:hover:bg-base-100 dark:enabled:[&:not(&:focus-visible)]:hover:bg-base-dark-800",i||l?"disabled:cursor-not-allowed":"",i&&l?"rounded-none":i?"rounded-l-none rounded-r-lg":l?"rounded-l-lg rounded-r-none":w("rounded-lg shadow-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-body-dark",d?"outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body dark:ring-offset-body-dark":"")),placeholder:s})),l&&u("span",{className:"flex flex-none select-none items-center justify-center rounded-r-lg border border-l-0 border-base-300 bg-base-100 px-3 pb-0.5 text-sm text-base-600 dark:border-base-dark-700 dark:bg-base-dark-800 dark:text-base-dark-400",children:l})]}))]})}function E(e){var r,a,t=e.primaryButton,o=e.input,s=e.secondaryButtons,i=o?"form":"div",l=null==t?void 0:t.icon,d=null!=t&&t.href?p:"button";return u("div",{className:"pointer-events-none fixed bottom-0 left-0 z-10 w-full pb-[env(safe-area-inset-bottom)] sm:bottom-4 sm:pl-48",children:f(i,{onSubmit:null==o?void 0:o.onFormSubmit,className:"pointer-events-auto mx-auto flex h-[4.25rem] w-full flex-row items-center justify-between gap-2 border-t border-base-100/75 border-opacity-50 bg-base-100/60 p-3 shadow-upward-sm backdrop-blur transparency-reduce:bg-base-100 transparency-reduce:backdrop-blur-none dark:border-base-dark-900/75 dark:border-opacity-50 dark:bg-base-dark-900/60 dark:transparency-reduce:bg-base-dark-900 sm:w-96 sm:rounded-2xl sm:border sm:shadow-md",children:[t&&f(d,{onClick:t.onClick,type:t.href?void 0:"button",href:t.isLoading||t.disabled?"":null!==(r=t.href)&&void 0!==r?r:"",className:w("flex h-full flex-grow select-none items-center justify-center rounded-lg border border-primary-600 bg-primary-600 px-4 py-2 font-medium text-base-50 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-primary-400 dark:bg-primary-400 dark:text-base-dark-950 dark:focus-visible:ring-offset-body-dark",t.isLoading||t.disabled?"cursor-not-allowed opacity-50":"transition-all hover:border-primary-700 hover:bg-primary-700 active:scale-95 dark:hover:border-primary-300 dark:hover:bg-primary-300"),disabled:t.isLoading||t.disabled,children:[t.isLoading?u(n,{className:"flex-none animate-spin"}):l&&u(l,{className:"flex-none"}),t.text&&u("span",{className:"ml-2 mr-1",children:t.text})]}),o&&u("input",v(v({},o.register(o.name,o.options)),{},{type:o.type,inputMode:"number"===o.type?"numeric":o.type,"aria-invalid":!!o.error,placeholder:null!==(a=o.error)&&void 0!==a?a:o.placeholder,className:w("h-full min-w-0 flex-1 rounded-lg border border-base-300 bg-white px-3 py-2 text-base-800 placeholder-base-400 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:placeholder-base-dark-600 dark:focus-visible:ring-offset-body-dark [&:not(&:focus-visible)]:hover:bg-base-100 dark:[&:not(&:focus-visible)]:hover:bg-base-dark-800",o.error?"outline-none ring-2 ring-red-500 ring-offset-2 ring-offset-body motion-safe:animate-shake dark:ring-offset-body-dark":"")})),s&&s.map((function(e,r){var a,t,o=e.icon,s=e.href?p:"button";return u(s,{href:e.isLoading||e.disabled?"":null!==(a=e.href)&&void 0!==a?a:"",onClick:e.onClick,className:w("flex aspect-square h-full items-center justify-center rounded-lg border border-base-300 bg-white text-base-800 shadow-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:focus-visible:ring-offset-body-dark",e.isLoading||e.disabled?"cursor-not-allowed opacity-50":"transition-all hover:bg-base-100 active:scale-95 dark:hover:bg-base-dark-800"),disabled:e.isLoading||e.disabled,type:null!==(t=e.type)&&void 0!==t?t:"button",children:e.isLoading?u(n,{className:"flex-none animate-spin"}):u(o,{className:"flex-none",size:20})},r)}))]})})}function D(e){var r=e.icon,a=e.text,t=e.href,o=e.isTabBarHiddenOnMobile;return f(p,{className:w("fixed right-4 z-10 flex items-center justify-center gap-2 rounded-2xl border-primary-600 bg-primary-600 p-4 font-semibold text-base-50 shadow-md transition-all hover:border-primary-700 hover:bg-primary-700 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:border-primary-400 dark:bg-primary-400 dark:text-base-dark-950 dark:hover:border-primary-300 dark:hover:bg-primary-300 dark:focus-visible:ring-offset-body-dark sm:bottom-6 sm:right-1/2 sm:translate-x-[calc(50%+6rem)]",o?"bottom-[calc(1rem+env(safe-area-inset-bottom))]":"bottom-[calc(5rem+env(safe-area-inset-bottom))]"),href:t,children:[u(r,{}),a]})}function H(e){var r=e.isFloating,a=i();return u("button",{onClick:function(){a.back()},type:"button","aria-label":"이전 페이지로 돌아가기",className:w("absolute left-0 flex aspect-square h-full items-center justify-center pr-0.5 transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-[0.85] dark:focus-visible:ring-offset-body-dark sm:left-48",r?"pointer-events-auto m-2 rounded-full bg-base-50/50 text-base-900 shadow backdrop-blur transparency-reduce:bg-base-50 transparency-reduce:backdrop-blur-none dark:bg-base-dark-950/50 dark:text-base-dark-100 dark:transparency-reduce:bg-base-dark-950 sm:shadow-none":"rounded-2xl ring-inset"),children:u(t,{className:"transition-colors hover:text-base-600 dark:hover:text-base-dark-400"})})}function A(e){var r=e.background,a=e.backButton,t=e.title;return r?f("header",{className:"fixed z-10 flex h-12 w-full max-w-3xl items-center justify-center bg-body/50 text-base-900 backdrop-blur transparency-reduce:bg-body transparency-reduce:backdrop-blur-none dark:bg-body-dark/50 dark:text-base-dark-100 dark:transparency-reduce:bg-body-dark sm:left-1/2 sm:h-16 sm:-translate-x-1/2 sm:pl-40",children:[a&&u(H,{isFloating:!1}),t&&u("h1",{className:w("w-full px-2 text-center text-lg font-medium sm:text-left sm:text-xl sm:font-semibold",a?"sm:pl-24":"sm:pl-12"),children:t})]}):a&&u("header",{className:"pointer-events-none fixed z-10 flex h-8 w-full max-w-3xl sm:left-1/2 sm:h-12 sm:-translate-x-1/2 sm:pl-40",children:u(H,{isFloating:!0})})}function W(e){var r=e.icon,a=e.text,t=e.href,o=l(),n="/"===t?"/"===o:o.startsWith(t);return f(p,{className:w("flex h-full flex-col items-center justify-center gap-1 rounded-xl ring-inset transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body active:scale-95 dark:focus-visible:ring-offset-body-dark sm:flex-row sm:justify-start sm:gap-2 sm:p-4 sm:hover:bg-base-200 dark:sm:hover:bg-base-dark-900",n?"text-primary-500":"text-base-700 dark:text-base-dark-300"),href:t,children:[u(r,{className:"flex-none sm:size-7",size:20}),u("span",{className:"text-xs font-medium sm:text-base sm:font-semibold",children:a})]})}function I(e){var r=e.hideOnMobile,a=e.items,t=e.gridCols;return u("nav",{children:u("ul",{className:w("transparency-reduce:backdrop-blur-none-none fixed bottom-0 z-10 h-[calc(3.5rem+env(safe-area-inset-bottom))] w-full border-t border-base-100/75 border-opacity-50 bg-base-100/60 pb-[env(safe-area-inset-bottom)] shadow-upward-sm backdrop-blur transparency-reduce:bg-base-100 transparency-reduce:backdrop-blur-none dark:border-base-dark-900/75 dark:border-opacity-50 dark:bg-base-dark-900/60 dark:transparency-reduce:bg-base-dark-900 sm:left-8 sm:top-1/2 sm:flex sm:h-fit sm:max-h-screen sm:w-36 sm:-translate-y-1/2 sm:flex-col sm:gap-1 sm:overflow-auto sm:border-none sm:bg-transparent sm:py-4 sm:shadow-none sm:backdrop-blur sm:dark:bg-transparent",r?"hidden":"grid",t),children:a.map((function(e){return u("li",{children:u(W,v({},e))},e.href)}))})})}function _(e){var r=e.header,a=e.tabBar,t=e.has,o=e.children;return f("div",{className:"bg-body dark:bg-body-dark",children:[u("div",{className:"fixed left-1/2 top-4 z-50 flex w-full -translate-x-1/2 -translate-y-16 items-center justify-center transition-transform focus-within:translate-y-0",children:u("a",{href:"#main-content",className:"rounded-lg border-base-300 bg-white px-3.5 py-2 font-semibold text-base-800 shadow-sm transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-body dark:border-base-dark-700 dark:bg-base-dark-900 dark:text-base-dark-200 dark:focus-visible:ring-offset-body-dark",children:"Skip to main content"})}),r&&u(A,v({},r)),u(I,v(v({},a),{},{hideOnMobile:!(null==t||!t.bottomToolbar)||a.hideOnMobile})),f("main",{id:"main-content",className:w("relative mx-auto min-h-screen max-w-3xl overflow-x-hidden sm:pl-48",!0===(null==r?void 0:r.backButton)||null!=r&&r.title?w("sm:scroll-mt-16 sm:pt-16",!0===(null==r?void 0:r.background)?"scroll-mt-12 pt-12":""):"",null!=t&&t.bottomToolbar?"pb-[4.25rem] sm:pb-[5.375rem]":a.hideOnMobile?"pb-0":"",null!=t&&t.floatingButton?w("sm:pb-20",a.hideOnMobile?"pb-[4.5rem]":"pb-[8.5rem]"):"",null!=t&&t.floatingButton||null!=t&&t.bottomToolbar||a.hideOnMobile?"":"pb-[calc(3.5rem+env(safe-area-inset-bottom))] sm:pb-0"),children:[o,(null==t?void 0:t.floatingButton)&&u(D,v({},null==t?void 0:t.floatingButton)),(null==t?void 0:t.bottomToolbar)&&u(E,v({},null==t?void 0:t.bottomToolbar))]})]})}var G={plugins:[k()],theme:{extend:{minHeight:{screen:["100vh","100dvh"]},maxHeight:{screen:["100vh","100dvh"],fullScreenOverlay:["calc(100vh - 3rem)","calc(100svh - 3rem)"]},boxShadow:{"upward-sm":"0 -1px 2px 0 rgb(0 0 0 / 0.05);"},keyframes:{shake:{"10%, 90%":{transform:"translate3d(-1px, 0, 0)"},"20%, 80%":{transform:"translate3d(2px, 0, 0)"},"30%, 50%, 70%":{transform:"translate3d(-3px, 0, 0)"},"40%, 60%":{transform:"translate3d(3px, 0, 0)"}},fadeout:{"0%":{opacity:"1"},"100%":{opacity:"0"}},fadein:{"0%":{opacity:"0"},"100%":{opacity:"1"}}},animation:{shake:"shake 0.5s both",fadeout:"fadeout 0.2s both",fadein:"fadein 0.2s both"}}}};export{O as Button,S as Checkbox,g as FullScreenOverlay,_ as Layout,M as Selector,N as Skeleton,B as TextArea,T as TextInput,F as Toggle,w as j,G as te6TailwindPreset};
