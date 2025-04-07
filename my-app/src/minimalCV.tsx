import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mail, Github, Linkedin, Download, ExternalLink, MapPin, Trophy, Globe2, Link2, Expand, Play, Pause, Volume2, VolumeX, X } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LanguageSwitcher } from './languageSwitcher';
import { LanguageProvider, useLanguage } from './languageContext';
import { portfolio, experience, education, languages, awards, skills, Project } from './portfolioData';
import Navigation from './navigation';

const MinimalCV = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 ">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* Header with Photo */}
        <header className="flex flex-col md:flex-row gap-12 items-center md:items-start scroll-mt-24" id="about">
          {/* <div className="flex-shrink-0">
            <img
              src="./img/photo.jpg"
              alt="Piotr Sobas"
              className="rounded-full w-48 h-48 object-cover "
            />
          </div> */}

          <div className="space-y-6 text-center md:text-left ">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Piotr Sobas</h1>
              <h2 className="text-xl ">{t.header.role}</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 ">
                <MapPin className="h-4 w-4" />
                <span>Kraków, Małopolskie</span>
              </div>
            </div>

            <p className="max-w-2xl leading-relaxed">
              {t.header.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="mailto:sobas.piotr545@gmail.com" target="_blank">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </a>
              <a
                href={`./${t.header.CVFileName}`}
                download={t.header.CVFileName}
              >
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  {t.header.downloadCV}
                </Button>
              </a>
              <a href="https://github.com/SpaghettiMaster545" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/piotr-sobas-828306271/" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.fiverr.com/goodbanana545" target="_blank">
                <Button variant="ghost" className='px-2'>
                  <img src="./svg/fiverr.svg" alt="" className='w-10' />
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="space-y-8 scroll-mt-24" id="experience">
          <h3 className="text-2xl font-bold">{t.sections.experience}</h3>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium">{job.role[language]}</h4>
                    <p className="text-gray-400">{job.company}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location[language]}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{job.period[language]}</span>
                </div>
                <p className="text-gray-400">{job.details[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-8 scroll-mt-24" id="skills">
          <h3 className="text-2xl font-bold">{t.sections.skills}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills.categories[language]).map(([category, skillList]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-medium text-gray-300">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-8 scroll-mt-24" id="projects">
          <h3 className="text-2xl font-bold">{t.sections.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 p-6">
                    <div className="relative h-[200px] w-full">
                      <MediaPreview url={project.images[0]} />
                      {/* <Skeleton className="h-full w-full rounded-xl" /> */}
                      <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          onClick={() => setSelectedProject(project)}
                        >
                          {t.project.viewProject}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="pt-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-medium">{project.title[language]}</h4>
                        <p className="text-gray-400 text-sm">{project.description[language]}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <ProjectDialog
            project={selectedProject!}
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </section>

        {/* Education */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">{t.sections.education}</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="space-y-1">
                  <h4 className="text-lg font-medium">{edu.degree[language]}</h4>
                  <p className="text-gray-400">{edu.school[language]}</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location[language]}</span>
                  </div>
                </div>
                <span className="text-gray-500">{edu.year[language]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            {t.sections.awards}
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium">{award.title[language]}</h4>
                    <p className="text-gray-400">{award.organization[language]}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{award.year}</span>
                </div>
                <p className="text-gray-400">{award.description[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            {t.sections.languages}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.name[language]}</span>
                  <span className="text-gray-400 text-sm">{lang.level}</span>
                </div>
                <Progress value={lang.proficiency} className="h-2" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">{t.footer.rights}</p>
            <div className="flex gap-4 justify-center">
              <a href="mailto:sobas.piotr545@gmail.com" target="_blank" className='h-min'>
                <Button variant="ghost" size="sm" >
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://github.com/SpaghettiMaster545" target="_blank" className='h-min'>
                <Button variant="ghost" size="sm">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/piotr-sobas-828306271/" target="_blank" className='h-min'>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.fiverr.com/goodbanana545" target="_blank" className='h-min'>
                <Button variant="ghost" size="sm" className='px-2'>
                  <img src="./svg/fiverr.svg" alt="" className='w-10' />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
};



// Media Preview Component
const MediaPreview = ({ url }: { url: string }) => {
  const isVideoFile = isVideo(url);

  if (isVideoFile) {
    return (
      <video
        className="w-full h-full object-cover"
        preload="metadata"
      >
        <source src={`${url}#t=0.5`} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={url}
      alt="Project preview"
      className="w-full h-full object-cover aspect-video md:aspect-auto"
    />
  );
};

interface MediaItem {
  url: string;
  type: 'image' | 'video';
}

// Utility function to determine if a URL is a video
const isVideo = (url: string): boolean => {
  return url.toLowerCase().endsWith('.mp4');
};

// Convert simple string array to MediaItem array
const convertToMediaItems = (urls: string[]): MediaItem[] => {
  return urls.map(url => ({
    url,
    type: isVideo(url) ? 'video' : 'image'
  }));
};
const FullSizeDialog = ({
  media,
  open,
  onClose
}: {
  media: MediaItem,
  open: boolean,
  onClose: () => void
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-fit h-fit border-gray-800 p-4 bg-gray-900/95">
        <div className="relative h-full flex items-center justify-center w-[90vw]">
          {media.type === 'image' ? (
            <img
              src={media.url}
              alt="Full size view"
              className="max-h-[90vh] w-auto object-contain"
            />
          ) : (
            <div className="h-[90vh] w-[90vw] flex items-center justify-center">
              <VideoPlayer url={media.url} isFullSize />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Video Player Component with fullscreen support
const VideoPlayer = ({ url, isFullSize = false }: { url: string, isFullSize?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
      setIsPlaying(true);
    }
  }, [url]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={url}
        className={`w-full h-full object-contain ${isFullSize ? 'max-h-[90vh]' : ''}`}
        controls={false}
        loop
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={togglePlay}
          className="bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

// Media Gallery Component
const MediaGallery = ({ mediaUrls }: { mediaUrls: string[] }) => {
  const mediaItems = convertToMediaItems(mediaUrls);
  const [mainMedia, setMainMedia] = useState<MediaItem>(mediaItems[0]);
  const [isFullSize, setIsFullSize] = useState(false);

  const handleMediaSelect = (media: MediaItem) => {
    if (mainMedia.url === media.url) {
      // If clicking the same media, return to the first one
      setMainMedia(mediaItems[0]);
    } else {
      setMainMedia(media);
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Media Display */}
        <div className="relative">
          <ScrollArea className="h-[205px] md:h-[465px] w-full rounded-lg">
            <div className="relative rounded-lg overflow-hidden bg-gray-800">
              {mainMedia.type === 'image' ? (
                <img
                  src={mainMedia.url}
                  alt="Main view"
                  className="w-full object-contain"
                />
              ) : (
                <VideoPlayer url={mainMedia.url} />
              )}
            </div>
          </ScrollArea>

          {/* Expand Button */}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setIsFullSize(true)}
            className="absolute top-2 right-2 bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm"
          >
            <Expand className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-3 gap-4">
          {mediaItems.slice(1).map((media, index) => (
            <button
              key={index}
              onClick={() => handleMediaSelect(media)}
              className={`
                relative rounded-lg overflow-hidden bg-gray-800
                ${mainMedia.url === media.url ? 'ring-2 ring-blue-500' : 'hover:opacity-80'}
                transition-all duration-200
              `}
            >
              {media.type === 'image' ? (
                <img
                  src={media.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="relative w-full aspect-video">
                  <video
                    src={media.url}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Full Size Dialog */}
      <FullSizeDialog
        media={mainMedia}
        open={isFullSize}
        onClose={() => setIsFullSize(false)}
      />
    </>
  );
};

const ProjectDialog = ({ project, open, onClose }: { project: Project; open: boolean; onClose: () => void }) => {
  const { t, language } = useLanguage();

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 text-gray-100 border-gray-800 p-0 w-[95vw] md:w-full h-[90vh] rounded-lg sm:rounded-xl">
        <ScrollArea className="h-full">
          <div className="p-4 sm:p-6 md:p-9">
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-xl sm:text-2xl font-bold break-words">
                {project.title[language]}
              </DialogTitle>
              <DialogDescription className="text-gray-400 text-sm sm:text-base">
                {project.description[language]}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 mt-4">
              {/* Image Gallery */}
              <MediaGallery mediaUrls={project.images} />

              {/* Project Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-sm sm:text-base">
                    {project.longDescription[language]}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-medium">
                      {t.project.keyFeatures}
                    </h4>
                    <ul className="space-y-2">
                      {project.features[language].map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
                        >
                          <div className="h-2 w-2 mt-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                          <span className="break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-medium">
                      {t.project.techUsed}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Project Button - Uncommented for reference */}
                    {/* <div className="pt-2 sm:pt-4">
                      <Button className="w-full">
                        <Link2 className="mr-2 h-4 w-4" />
                        Visit Project
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MinimalCV;