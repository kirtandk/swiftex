import React, {useEffect, useRef} from "react";
import {Box, Container, Typography} from "@mui/material";
import {gsap} from "gsap";
import "aos/dist/aos.css";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VerticalLineAnimation = () => {
    const tractorRef = useRef(null);
    const motionPathRef = useRef(null);

    const {contextSafe} = useGSAP();

    useEffect(function contextSafe() {

        gsap.set(tractorRef.current, {
            scale: 0.7,
            autoAlpha: 1,
            transformOrigin: "center",
        });
        gsap.to(tractorRef.current, {
            scrollTrigger: {
                trigger: motionPathRef.current,
                start: "top center",
                end: () => "+=" + motionPathRef.current.getBoundingClientRect().height,
                scrub: 0.5,
                markers: false,
            },
            y: () => motionPathRef.current.getBoundingClientRect().height - 20,
            ease: "power1.inOut",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animationStart",
                scrub: 2,
                start: "top 50%",
                end: "bottom 100%",
                markers: false,
                toggleActions: "restart none none none",
            },
        });

        tl.to('.one', {x: 100, opacity: 1}, "start")
            .to('.oneDesc', {x: -10, opacity: 1}, "start")
            .to('.two', {x: 100, opacity: 1}, "start+=0.5")
            .to('.twoDesc', {x: -10, opacity: 1}, "start+=0.5")
            .to('.three', {x: 100, opacity: 1}, "start+=1")
            .to('.threeDesc', {x: -10, opacity: 1}, "start+=1")
            .to('.four', {x: 100, opacity: 1}, "start+=1.5")
            .to('.fourDesc', {x: -10, opacity: 1}, "start+=1.5");

    }, []);

    return (
        <Box padding={"100px 0"}>
            <Container sx={{maxWidth: {lg: "xl", xs: "lg"}}}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: {
                            xs: "38px",
                            md: "40px",
                            lg: "48px",
                            xl: "56px",
                        },
                        fontWeight: "600",
                        fontFamily: "'Public Sans', sans-serif",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    Our Service Process
                </Typography>
                <Box
                    className={"animationStart"}
                    sx={{
                        position: "relative",
                        height: "150vh",
                        overflow: "hidden",
                        mt: 10,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            position: "relative",
                            height: "200vh",
                            width: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                width: "45%",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{margin: "100px", opacity: "0"}} className={"one"}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "700",
                                        fontSize: "80px",
                                        color: "#80808045",
                                    }}
                                >
                                    01
                                </Typography>
                            </Box>
                            <Box sx={{margin: "100px", opacity: "0"}} className={"twoDesc"}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: {xs: "38px", md: "40px"},
                                        fontWeight: "600",
                                        fontFamily: "'Public Sans', sans-serif",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Logistics Solution
                                </Typography>
                                <Typography
                                    mt={3}
                                    variant="body1"
                                    sx={{
                                        color: "#00000080",
                                        fontFamily: "'Prompt', sans-serif",
                                    }}
                                >
                                    We provide end-to-end logistics solutions, ensuring timely and
                                    safe delivery of your goods to their destination. Our service
                                    spans all major transportation methods, with a focus on
                                    seamless and cost-effective solutions.
                                </Typography>
                            </Box>
                            <Box sx={{margin: "100px", opacity: '0'}} className={"three"}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "700",
                                        fontSize: "80px",
                                        color: "#80808045",
                                    }}
                                >
                                    03
                                </Typography>
                            </Box>
                            <Box sx={{margin: "100px", opacity: "0"}} className={"fourDesc"}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: {xs: "38px", md: "40px"},
                                        fontWeight: "600",
                                        fontFamily: "'Public Sans', sans-serif",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Customs Clearance
                                </Typography>
                                <Typography
                                    mt={3}
                                    variant="body1"
                                    sx={{
                                        color: "#00000080",
                                        fontFamily: "'Prompt', sans-serif",
                                    }}
                                >
                                    Our customs brokerage services assist you in navigating
                                    complex regulations to ensure swift and accurate customs
                                    clearance for your shipments, reducing potential delays.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            ref={motionPathRef}
                            sx={{
                                position: "absolute",
                                top: "0",
                                left: "50%",
                                width: "5px",
                                height: "150vh",
                                backgroundColor: "black",
                            }}
                        />

                        <Box
                            sx={{
                                width: "45%",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box sx={{opacity: "0", marginBottom: "200px"}} className={"oneDesc"}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: {xs: "38px", md: "40px"},
                                        fontWeight: "600",
                                        fontFamily: "'Public Sans', sans-serif",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Select Freight
                                </Typography>
                                <Typography
                                    mt={3}
                                    variant="body1"
                                    sx={{
                                        color: "#00000080",
                                        fontFamily: "'Prompt', sans-serif",
                                    }}
                                >
                                    Swiftex Overseas’ services include Full Container Load (FCL)
                                    and Less than Container Load (LCL) for sea freight, air
                                    freight consolidation for smaller shipments needing faster
                                    delivery, and road and rail freight for regional and
                                    cross-border transportation. We also provide multimodal
                                    solutions, combining different transport modes to achieve the
                                    best route and speed. To further support your operations, we
                                    offer customs brokerage services to streamline the
                                    documentation process and facilitate smooth customs clearance.
                                </Typography>
                            </Box>

                            <Box sx={{marginBottom: "200px", opacity: "0"}} className={"two"}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "700",
                                        fontSize: "80px",
                                        color: "#80808045",
                                    }}
                                >
                                    02
                                </Typography>
                            </Box>

                            <Box sx={{marginBottom: "200px", opacity: "0"}} className={"threeDesc"}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: {xs: "38px", md: "40px"},
                                        fontWeight: "600",
                                        fontFamily: "'Public Sans', sans-serif",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Customs Clearance
                                </Typography>
                                <Typography
                                    mt={3}
                                    variant="body1"
                                    sx={{
                                        color: "#00000080",
                                        fontFamily: "'Prompt', sans-serif",
                                    }}
                                >
                                    Our customs brokerage services assist you in navigating
                                    complex regulations to ensure swift and accurate customs
                                    clearance for your shipments, reducing potential delays.
                                </Typography>
                            </Box>

                            <Box sx={{marginBottom: "200px", opacity: "0"}} className={"four"}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "700",
                                        fontSize: "80px",
                                        color: "#80808045",
                                    }}
                                >
                                    04
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* The red circle (tractor) that moves along the vertical line */}
                    <div
                        content="img"

                        ref={tractorRef}
                        style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "red",
                            position: "absolute",
                            top: "0",
                            left: "calc(50% - 7px)",
                            borderRadius: "50%",
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default VerticalLineAnimation;

