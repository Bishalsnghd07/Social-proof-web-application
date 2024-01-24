import { IconVariant } from "@/app/models/types";

interface IIcon {
    icon: IconVariant;
  }

  const getIcon = (icon: IconVariant) => {
    switch (icon) {
        case 'star':
          return (
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>
          );

        case 'top': 
          return (
            <svg width="584" height="362" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="69.212%" x2="9.399%" y2="32.183%" id="a"><stop stop-color="#8A4389" stop-opacity="0" offset="0%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/><stop stop-color="#512051" offset="100%"/></linearGradient></defs><path d="M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z" transform="rotate(180 292 181)" fill="url(#a)" fill-rule="evenodd" opacity=".05"/></svg>
          )  
    }
  };

  export default function Icon({ icon }: IIcon) {
    return <>{getIcon(icon)}</>;
  }
