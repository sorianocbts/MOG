import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <div className="faq-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">FAQ</span>
					<h2>Frequently Asked Questions</h2>
				</div>

				<div className="faq-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How does Vivi Production house Work?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What if I have an urgent project that I need done fast!
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What type of Videos does your production house create?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I order multiple videos at the same time?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can you create a video for my Industry?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I contact a creatine actor or filmmaker?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    When does a creatine movie come out on DVD?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet conse ctetur adipisicing elit, sed do aliqua.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
				</div>
			</div>
		</div>
    )
}

export default FaqContent;