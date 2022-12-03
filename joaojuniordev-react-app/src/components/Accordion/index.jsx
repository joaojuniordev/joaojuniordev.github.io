import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

import styles from "./Accordion.module.css"


function MyAccordion(props) {
    const {
        items = [
            {
                title:"Accordion Item 1",
                message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                title:"Accordion Item 2",
                message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }

        ],
        style={with:"100%"}
    } = props

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <Accordion className={styles.accordion} open={open} toggle={toggle} style={style}>
        {
            items.map(({title, message},i)=>{
                return  <AccordionItem key={i}>
                            <AccordionHeader className={styles.header} targetId={i+1} >
                                {title}
                            </AccordionHeader>
                            <AccordionBody className={styles.body} accordionId={i+1}>
                                {message}
                            </AccordionBody>
                        </AccordionItem>
            })
        }
        </Accordion>        
    )
}

export default MyAccordion