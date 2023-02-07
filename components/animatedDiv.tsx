import React, { ReactNode, useState } from 'react'
import { Transition } from '@headlessui/react'

type Props = {
    children?: ReactNode,
    delay: number
}

const AnimatedDiv = ({ children, delay = 0 }: Props) => {
    const [isShowing, setIsShowing] = useState<boolean>(false)
    return (
        <Transition
            as="div"
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
     );
}
 
export default AnimatedDiv;