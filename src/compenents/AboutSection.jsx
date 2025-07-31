 import { Briefcase, Code, User,  } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">Passionate about software engineering</h3>
                        <p className="text-muted-foreground"> 
                            I'm passionate about full-stack development, 
                            both front-end and back-end, 
                            and I'm particularly interested in Java and Angular technologies. 
                            I love designing creative, dynamic and responsive web applications using different languages and frameworks.
                        </p>
                        <p className="text-muted-foreground">
                            I'm used to solving complex problems in demanding projects, 
                            combining rigor, logic and a sense of software architecture. 
                            Curious and motivated, 
                            I'm constantly learning new web technologies to improve my skills and keep up to date with development trends.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="src/images/CV_OUAHRICH_Mohamed.pdf" download="Resume_Mohamed_Ouahrich" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Design the Architecture</h4>
                                    <p className="text-muted-foreground">
                                        Define data models, features, and tech stack.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Build Backend & Frontend & Connect to API.
                                    </p>
                                </div>
                            </div>
                
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to deployement with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};