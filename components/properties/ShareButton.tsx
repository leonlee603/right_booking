'use client';

import { LuShare2 } from 'react-icons/lu';
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';

export default function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='bottom'
        align='end'
        sideOffset={10}
        className='flex items-center gap-x-2 justify-center w-full p-3'
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={24} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={24} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={24} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}
