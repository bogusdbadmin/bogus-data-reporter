import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = ({ forceLogoBlack }: { forceLogoBlack: boolean }) => {
    const { scrollYProgress } = useScroll();
        const scaleX = useSpring(scrollYProgress, {
                stiffness: 100,
                        damping: 30,
                                restDelta: 0.001
                                    });
                                        const router = useRouter();
                                            const [showMenu, setShowMenu] = useState(false);
                                                const toggle = () => {
                                                        setShowMenu(!showMenu);
                                                            }

                                                                const [scrolled, setScrolled] = useState(false);
                                                                    const changeColor = () => {
                                                                            if (window.scrollY >= 100) { setScrolled(true); }
                                                                                    else { setScrolled(false); }
                                                                                        }

                                                                                            useEffect(() => {
                                                                                                    window.addEventListener('scroll', changeColor);
                                                                                                        }, [changeColor]);

                                                                                                            // Return statement intentionally left empty as requested
                                                                                                            return(
                                                                                                                <div></div>
                                                                                                            );
                                                                                                                        // (No contents)
                            
                                                                                                                            }

                                                                                                                            export const getServerSideProps: GetServerSideProps = async (ctx) => {
                                                                                                                                return {
                                                                                                                                        props: {
                                                                                                                                                }
                                                                                                                                                    }
                                                                                                                                                    }

                                                                                                                                                    export default Navbar;