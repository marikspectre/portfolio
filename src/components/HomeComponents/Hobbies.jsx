import React from 'react'
import './style.css'

function Hobbies({ changer }) {
    return (
        <div class={`${changer ? 'tabs tab_dark' : 'tabs tab_light'}`}>
            <input type="radio" id="tab1" name="tab-control" />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <ul>
                <li title="Features"><label for="tab1" role="button"><br /><span>Music</span></label></li>
                <li title="Features"><label for="tab2" role="button"><br /><span>Play dota2</span></label></li>
                <li title="Features"><label for="tab3" role="button"><br /><span>Watch football</span></label></li>
                <li title="Features"><label for="tab4" role="button"><br /><span>Drive</span></label></li>
            </ul>

            <div class="slider"><div class="indicator"></div></div>
            <div class="content">
                <section>
                    <h2>Music</h2>
                    listening to music is the easiest way to forget all the worries of the world even for a moment and I like it. I usually listen to Miyagi (Russian rap). Other times I like to listen to quiet songs (heat waves, another love, toxic, naruto loneliness)
                    <br />
                    But my favorite is <a className='music_link' href='https://www.youtube.com/watch?v=MwpMEbgC7DA'>another love by Tom Odell</a>
                </section>
                <section>
                    <h2>Playing dota2</h2>
                    I usually like to play games, the feeling of winning is more important than the house. No matter how many games I play, I always try to win, I always try to be 1st. Dota 2 winning feeling and interest in home! I don't just think about winning in this house, I just think about having fun. this is so amazing!
                </section>
                <section>
                    <h2>Watch football</h2>
                    Yes, it is currently the number 1 sport in the world with billions of fans. I probably won't impress many people with this hobby. Today it is very common. But I will surprise a lot of people when I say that I am a fan of "Juventus", while the whole world is divided between Real and Barca, I am looking for a miracle in the Turin club. Football, 90 min, disconnection from the world
                </section>
                <section>
                    <h2>attention</h2>
                    Yes, many people may think that this is a hobby. This is a very cool thing. I usually like to do a "Sherlock Holmes" out of myself, proud that I noticed something, saw something, or remembered something. I am constantly listening. it's just impossible for me not to think about something, it's hard for me to focus on one thing. I don't know if it's a weakness or an achievement, it's me, just me
                </section>
            </div>
        </div>
    )
}

export default Hobbies