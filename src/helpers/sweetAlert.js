import Swal from "sweetalert2";

import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const fireAlert = (icon, title, text) => {
  MySwal.fire({
    title: <p>{title}</p>,
    text: text,
    icon: icon,
    toast: true,
    position: 'bottom-end',
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}