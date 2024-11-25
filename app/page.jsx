import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { FileDownIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex w-full h-full items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Raeyan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree.</p>
            <div className="flex items-center gap-8">
              <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <DownloadIcon className="text-xl"/>
              </Button>
              <div>
                Social
              </div>
            </div>
            </div>
            
          <div>
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
      
      
  );
}
