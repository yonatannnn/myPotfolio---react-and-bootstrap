import React from 'react';
import Project from '../../components/layout/Project/Project';
import '../Projects/Projects.css';

import Poem1 from '../../assets/images/ethioPoem.jpg';
import Poem2 from '../../assets/images/poem.jpg';
import topRankers1 from '../../assets/images/TopRankers1.jpg';
import topRankers2 from '../../assets/images/TopRankers2.jpg';
import NumberGuessing1 from '../../assets/images/numberGuessingGame.jpg';
import NumberGuessing2 from '../../assets/images/NumberGuessing2.jpg';
import NoteTask1 from '../../assets/images/NoteTask1.jpg';
import NoteTask2 from '../../assets/images/NoteTask2.jpg';
import cowTrack1 from '../../assets/images/cowTrack1.jpg';
import cowTrack2 from '../../assets/images/cowTrack2.jpg';

const Projects = () => {
    return ( 
        <div className="outer-skills projects-main bg-dark d-flex flex-column">
            <div className="d-flex flex-column gap-5">
                <div className="d-flex justify-content-center">
                    <h1 className="text-warning align-self-center skills-title">Projects</h1>
                </div>
                <div className="projects">
                    <Project 
                        images={[Poem1, Poem2]} 
                        link="https://t.me/c/1929763911/16" 
                        title="Ethio Poem" 
                        description="Ethio Poem is a mobile app where people can easily and freely access a variety of poems."
                        isMobile={true}
                        githubLink='https://github.com/yonatannnn/Ethio-Gitm'
                    />
                    <Project 
                        images={[topRankers1, topRankers2]} 
                        link="https://t.me/c/1929763911/22" 
                        title="Top Rankers" 
                        description="Top Rankers is an application designed to collect and recognize top students for rewards. Developed for my local community, it addresses specific needs and promotes recognition."
                        isMobile={true}
                        githubLink='https://github.com/yonatannnn/TopRankers'
                    />
                    <Project 
                        images={[NumberGuessing1, NumberGuessing2]} 
                        link="https://t.me/c/1929763911/22" 
                        title="NumberQuest" 
                        description="NumberQuest is a multiplayer number guessing game, where players compete to guess numbers and enhance their gaming experience."
                        isMobile={true}
                        githubLink='https://github.com/yonatannnn/game_app'
                    />
                    <Project 
                        images={[NoteTask1, NoteTask2]} 
                        link="https://t.me/c/1929763911/13" 
                        title="NoteTask" 
                        description="NoteTask is a note-taking and task management mobile app that offers secure online functionality for managing notes and tasks efficiently."
                        isMobile={true}
                        githubLink='https://github.com/yonatannnn/Diary-Writing-app'
                    />
                    <Project 
                        images={[cowTrack1, cowTrack2]} 
                        link="https://t.me/c/1929763911/15" 
                        title="CowTrack" 
                        description="CowTrack is a mobile app designed to track cow data, facilitating farm management and improving farm operations."
                        isMobile={true}
                        githubLink='https://github.com/yonatannnn/Animal-Farm'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
