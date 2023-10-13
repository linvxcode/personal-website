import { CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const CardFooterExp = ({project}) => {
  return (
    <div>
      <CardFooter className="p-0 pt-3 pb-3 px-5 gap-2">
                {project?.imgBuild && (
                  <Image
                  alt="img"
                  src={project.imgBuild}
                  loading="lazy"
                  width={45}
                  height={45}
                  style={{ width: "auto", height: "auto" }}
                  />
                  )}
                {project?.svg && 
                <Image src={project.svg} alt='img' height={24} width={24} style={{ width: 24, height: 24 }} loading='lazy' />
                }
                {project?.svg2 &&
                <Image src={project.svg2} alt='img' height={24} width={24} style={{ width: 24, height: 24 }} loading='lazy' />
                }
                {project?.svg3 && 
                <Image src={project.svg3} alt='img' height={24} width={24} style={{ width: 24, height: 24 }} loading='lazy' />
                }
                {project.svg4 && (
                  <Image
                    alt="img"
                    src={project.svg4}
                    loading="lazy"
                    width={45}
                    height={45}
                    style={{ width: 24, height: 24 }}
                  />
                )}
              </CardFooter>
    </div>
  )
}

export default CardFooterExp
