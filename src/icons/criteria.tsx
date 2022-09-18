
import React from 'react'

export const BoxedArrowLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.375 3.75H10.875C10.179 3.75074 9.51179 4.02755 9.01967 4.51967C8.52754 5.01179 8.25074 5.67904 8.25 6.375V11.25H15.4392L12.9698 8.78016C12.8351 8.63836 12.7611 8.44955 12.7636 8.25398C12.7661 8.0584 12.8449 7.87155 12.9832 7.73325C13.1215 7.59495 13.3084 7.51614 13.504 7.51364C13.6995 7.51114 13.8884 7.58513 14.0302 7.71984L17.7802 11.4698C17.9207 11.6105 17.9997 11.8012 17.9997 12C17.9997 12.1988 17.9207 12.3895 17.7802 12.5302L14.0302 16.2802C13.8884 16.4149 13.6995 16.4889 13.504 16.4864C13.3084 16.4839 13.1215 16.4051 12.9832 16.2668C12.8449 16.1285 12.7661 15.9416 12.7636 15.746C12.7611 15.5505 12.8351 15.3616 12.9698 15.2198L15.4392 12.75H8.25V17.625C8.25 19.1273 9.83391 20.25 11.25 20.25H18.375C19.071 20.2493 19.7382 19.9725 20.2303 19.4803C20.7225 18.9882 20.9993 18.321 21 17.625V6.375C20.9993 5.67904 20.7225 5.01179 20.2303 4.51967C19.7382 4.02755 19.071 3.75074 18.375 3.75ZM3.75 11.25C3.55109 11.25 3.36032 11.329 3.21967 11.4697C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3897 3.21967 12.5303C3.36032 12.671 3.55109 12.75 3.75 12.75H8.25V11.25H3.75Z" fill="#777574"/>
        <path d="M8.25 11.25H15.4392L12.9698 8.78016C12.8351 8.63836 12.7611 8.44955 12.7636 8.25398C12.7661 8.05841 12.8449 7.87155 12.9832 7.73325C13.1215 7.59495 13.3084 7.51615 13.504 7.51364C13.6995 7.51114 13.8884 7.58513 14.0302 7.71985L17.7802 11.4698C17.9207 11.6105 17.9997 11.8012 17.9997 12C17.9997 12.1988 17.9207 12.3895 17.7802 12.5302L14.0302 16.2802C13.8884 16.4149 13.6995 16.4889 13.504 16.4864C13.3084 16.4839 13.1215 16.4051 12.9832 16.2668C12.8449 16.1285 12.7661 15.9416 12.7636 15.746C12.7611 15.5505 12.8351 15.3616 12.9698 15.2198L15.4392 12.75H8.25H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H8.25Z" fill="white"/>
    </svg>
  )
}
export const BoxedArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.125 20.25L13.625 20.25C14.321 20.2493 14.9882 19.9725 15.4803 19.4803C15.9725 18.9882 16.2493 18.321 16.25 17.625V12.75L9.06078 12.75L11.5302 15.2198C11.6649 15.3616 11.7389 15.5505 11.7364 15.746C11.7339 15.9416 11.6551 16.1285 11.5168 16.2668C11.3785 16.4051 11.1916 16.4839 10.996 16.4864C10.8005 16.4889 10.6116 16.4149 10.4698 16.2802L6.71984 12.5302C6.5793 12.3895 6.50035 12.1988 6.50035 12C6.50035 11.8012 6.5793 11.6105 6.71984 11.4698L10.4698 7.71984C10.6116 7.58513 10.8005 7.51113 10.996 7.51364C11.1916 7.51614 11.3785 7.59495 11.5168 7.73325C11.6551 7.87155 11.7339 8.0584 11.7364 8.25397C11.7389 8.44955 11.6649 8.63836 11.5302 8.78016L9.06078 11.25L16.25 11.25V6.375C16.25 4.87266 14.6661 3.75 13.25 3.75L6.125 3.75C5.42904 3.75074 4.76179 4.02754 4.26966 4.51967C3.77754 5.01179 3.50074 5.67904 3.5 6.375V17.625C3.50074 18.321 3.77754 18.9882 4.26966 19.4803C4.76179 19.9725 5.42904 20.2493 6.125 20.25ZM20.75 12.75C20.9489 12.75 21.1397 12.671 21.2803 12.5303C21.421 12.3897 21.5 12.1989 21.5 12C21.5 11.8011 21.421 11.6103 21.2803 11.4697C21.1397 11.329 20.9489 11.25 20.75 11.25H16.25V12.75H20.75Z" fill="#777574"/>
        <path d="M16.25 12.75L9.06078 12.75L11.5302 15.2198C11.6649 15.3616 11.7389 15.5504 11.7364 15.746C11.7339 15.9416 11.6551 16.1284 11.5168 16.2667C11.3785 16.4051 11.1916 16.4839 10.996 16.4864C10.8005 16.4889 10.6116 16.4149 10.4698 16.2802L6.71984 12.5302C6.5793 12.3895 6.50035 12.1988 6.50035 12C6.50035 11.8012 6.5793 11.6105 6.71984 11.4698L10.4698 7.71984C10.6116 7.58513 10.8005 7.51113 10.996 7.51364C11.1916 7.51614 11.3785 7.59494 11.5168 7.73325C11.6551 7.87155 11.7339 8.0584 11.7364 8.25397C11.7389 8.44954 11.6649 8.63836 11.5302 8.78015L9.06078 11.25L16.25 11.25H20.75C20.9489 11.25 21.1397 11.329 21.2803 11.4697C21.421 11.6103 21.5 11.8011 21.5 12C21.5 12.1989 21.421 12.3897 21.2803 12.5303C21.1397 12.671 20.9489 12.75 20.75 12.75H16.25Z" fill="white"/>
    </svg>

)

export const BoxedArrowwDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_b_4_253)">
            <rect x="0.5" width="24" height="24" rx="4" fill="#777574"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6C12.6989 6 12.8896 6.07902 13.0303 6.21967C13.171 6.36032 13.25 6.55109 13.25 6.75V15.4395L16.469 12.219C16.5387 12.1493 16.6215 12.094 16.7126 12.0562C16.8037 12.0185 16.9014 11.9991 17 11.9991C17.0986 11.9991 17.1962 12.0185 17.2873 12.0562C17.3785 12.094 17.4612 12.1493 17.531 12.219C17.6007 12.2887 17.656 12.3715 17.6938 12.4626C17.7315 12.5537 17.7509 12.6514 17.7509 12.75C17.7509 12.8486 17.7315 12.9463 17.6938 13.0374C17.656 13.1285 17.6007 13.2113 17.531 13.281L13.031 17.781C12.9613 17.8508 12.8785 17.9063 12.7874 17.9441C12.6963 17.9819 12.5986 18.0013 12.5 18.0013C12.4013 18.0013 12.3036 17.9819 12.2125 17.9441C12.1214 17.9063 12.0386 17.8508 11.969 17.781L7.46897 13.281C7.39924 13.2113 7.34392 13.1285 7.30619 13.0374C7.26845 12.9463 7.24902 12.8486 7.24902 12.75C7.24902 12.6514 7.26845 12.5537 7.30619 12.4626C7.34392 12.3715 7.39924 12.2887 7.46897 12.219C7.6098 12.0782 7.80081 11.9991 7.99997 11.9991C8.09859 11.9991 8.19624 12.0185 8.28735 12.0562C8.37846 12.094 8.46124 12.1493 8.53097 12.219L11.75 15.4395V6.75C11.75 6.55109 11.829 6.36032 11.9696 6.21967C12.1103 6.07902 12.3011 6 12.5 6Z" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_b_4_253" x="-3.5" y="-4" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_253"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_253" result="shape"/>
            </filter>
        </defs>
</svg>
)

export const PeopleGroups = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12ZM17 12C17.7956 12 18.5587 11.6839 19.1213 11.1213C19.6839 10.5587 20 9.79565 20 9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7956 6 17 6C16.2044 6 15.4413 6.31607 14.8787 6.87868C14.3161 7.44129 14 8.20435 14 9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12ZM3.375 13.5C2.87772 13.5 2.40081 13.6975 2.04917 14.0492C1.69754 14.4008 1.5 14.8777 1.5 15.375V16C1.5 16 1.5 20.5 8 20.5C14.5 20.5 14.5 16 14.5 16V15.375C14.5 14.8777 14.3025 14.4008 13.9508 14.0492C13.5992 13.6975 13.1223 13.5 12.625 13.5H3.375ZM14.337 19.0445C15.025 19.3235 15.8965 19.5 16.9995 19.5C22.2495 19.5 22.2495 15.5 22.2495 15.5V15.375C22.2495 14.8778 22.052 14.401 21.7005 14.0494C21.349 13.6977 20.8722 13.5001 20.375 13.5H14.8035C15.2531 14.0211 15.5 14.6867 15.499 15.375V16.0225L15.4985 16.051C15.4956 16.1481 15.4889 16.245 15.4785 16.3415C15.4537 16.5647 15.4134 16.7859 15.358 17.0035C15.1687 17.7494 14.8204 18.4457 14.337 19.0445Z" fill="#777574"/>
    </svg>
)

export const BoxDoted = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_b_4_249)">
            <rect x="0.5" width="22" height="22" rx="4" fill="#777574"/>
            <circle cx="11.5" cy="11" r="3" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_b_4_249" x="-3.5" y="-4" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_249"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_249" result="shape"/>
        </filter>
        </defs>
    </svg>
)

export const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_b_4_249)">
            <rect x="0.5" width="22" height="22" rx="4" fill="#777574"/>
            <circle cx="11.5" cy="11" r="3" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_b_4_249" x="-3.5" y="-4" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_249"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_249" result="shape"/>
        </filter>
        </defs>
    </svg>
    )

export const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clip-path="url(#clip0_4_171)">
            <path d="M7.2 1.60001C6.27788 1.59982 5.38401 1.91823 4.66968 2.50136C3.95535 3.08449 3.46442 3.89651 3.28 4.80001H0V6.40001H3.28C3.46361 7.30424 3.95418 8.11719 4.66859 8.70111C5.383 9.28503 6.27732 9.60402 7.2 9.60402C8.12268 9.60402 9.017 9.28503 9.73141 8.70111C10.4458 8.11719 10.9364 7.30424 11.12 6.40001H24V4.80001H11.12C10.9356 3.89651 10.4447 3.08449 9.73032 2.50136C9.01599 1.91823 8.12212 1.59982 7.2 1.60001ZM16.8 14.4C15.8779 14.3998 14.984 14.7182 14.2697 15.3014C13.5553 15.8845 13.0644 16.6965 12.88 17.6H0V19.2H12.88C13.0636 20.1042 13.5542 20.9172 14.2686 21.5011C14.983 22.085 15.8773 22.404 16.8 22.404C17.7227 22.404 18.617 22.085 19.3314 21.5011C20.0458 20.9172 20.5364 20.1042 20.72 19.2H24V17.6H20.72C20.5356 16.6965 20.0447 15.8845 19.3303 15.3014C18.616 14.7182 17.7221 14.3998 16.8 14.4Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_4_171">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>

)