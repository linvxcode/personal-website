import { CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const CardFooterExp = ({project}) => {
  return (
    <div>
      <CardFooter className="p-0 pt-3 pb-3 px-5 gap-2">
                <Image
                  alt="img"
                  src={project.imgBuild}
                  loading="lazy"
                  width={45}
                  height={45}
                  style={{ width: "auto", height: "auto" }}
                />
                {project?.svg && 
                <Image src={project.svg} alt='img' height={45} width={45} style={{ width: 45, height: 45 }} loading='lazy' />
                }
                {project?.svg2 &&
                <Image src={project.svg2} alt='img' height={45} width={45} style={{ width: 45, height: 45 }} loading='lazy' />
                }
                {project?.svg3 && 
                <Image src={project.svg3} alt='img' height={45} width={45} style={{ width: 45, height: 45 }} loading='lazy' />
                }
                {project.imgBuildTwo && (
                  <Image
                    alt="img"
                    src={project.imgBuildTwo}
                    loading="lazy"
                    width={45}
                    height={45}
                    style={{ width: "45px", height: "auto" }}
                  />
                )}
              </CardFooter>
    </div>
  )
}

export default CardFooterExp
