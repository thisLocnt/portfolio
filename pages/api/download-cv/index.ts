import { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";
import { join } from 'path';

const handler = (req: NextApiRequest, res: NextApiResponse) => {

    const onDownloadMyCv = () => {
        const fileName = 'TienLoc-CV.pdf'
        const filePath = join(process.cwd(), 'public/assets', fileName);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        const fileStream = createReadStream(filePath);
        fileStream.pipe(res);

        // Handle any errors
        fileStream.on('error', (error) => {
            console.error('Error reading file:', error);
            res.status(500).end('Internal Server Error');
        });
    }

    switch (req.method) {
        case 'GET':
            onDownloadMyCv()
            break;
        default:
            return res.status(405).json('Method is not allow')
    }
}

export default handler