const aboutBubble = document.getElementById("about_bubble");
const aboutBubbleTwo = document.getElementById("about_bubble_2");


function OnMouseEnterAbout()
{
    aboutBubble.animate(
        [
            {
                transform: "translateX(0)",
            },
            {
                transform: "translateX(-100px)",
            }
        ],
        {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out",
        }
    );
}

function OnMouseLeaveAbout() {
    aboutBubble.animate(
        [
            {
                transform: "translateX(-100px)",
            },
            {
                transform: "translateX(0px)",
            }
        ],
        {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out",
        }
    );
}

function OnMouseEnterProject() {
    aboutBubbleTwo.animate(
        [
            {
                transform: "translateX(0)",
            },
            {
                transform: "translateX(100px)",
            }
        ],
        {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out",
        }
    );
}

function OnMouseLeaveProject() {
    aboutBubbleTwo.animate(
        [
            {
                transform: "translateX(100px)",
            },
            {
                transform: "translateX(0px)",
            }
        ],
        {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out",
        }
    );
}