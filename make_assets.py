from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
from pathlib import Path
root=Path(__file__).parent/'public'/'images'
ref=Image.open('/mnt/data/e9fc8e0de13880efc0a75fa1aebc39da.jpg').convert('RGB')
regions={
 'hero-artist':(0,56,357,405),
 'service-manicure':(24,501,189,638),
 'service-tools':(199,502,363,638),
 'service-charms':(371,502,539,638),
 'service-pressons':(546,502,713,638),
 'promo-art':(158,712,252,857),
 'promo-trends':(372,712,478,857),
 'promo-care':(586,712,711,857),
 'gallery-1':(22,933,129,1038),
 'gallery-2':(138,933,246,1038),
 'gallery-3':(254,933,365,1038),
 'gallery-4':(374,933,482,1038),
 'gallery-5':(489,933,599,1038),
}
for name,box in regions.items():
 im=ref.crop(box)
 scale=2.6 if name=='hero-artist' else 3.0
 im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS)
 im.save(root/f'{name}.webp','WEBP',quality=91,method=6)

logo=Image.open('/mnt/data/6e615ff5-13b9-4083-be36-0f5fa22c554e.png').convert('RGB')
# The logo is a white round emblem embedded in a black screenshot. Preserve only the circle.
box=(101,82,614,596)
logo=logo.crop(box).resize((512,512),Image.Resampling.LANCZOS)
mask=Image.new('L', (512,512),0)
d=ImageDraw.Draw(mask)
d.ellipse((2,2,510,510),fill=255)
mask=mask.filter(ImageFilter.GaussianBlur(1))
logo.putalpha(mask)
logo.save(root/'studio-logo.png',optimize=True)
logo.resize((128,128),Image.Resampling.LANCZOS).save(Path(__file__).parent/'src'/'app'/'icon.png')
print('Assets generated:',len(list(root.iterdir())))
