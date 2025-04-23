import shutil
import os

versions = [d for d in os.listdir("mc-mappings") if os.path.isdir(os.path.join("mc-mappings", d))]

for v in versions:
    f = "mc-mappings/" + v + "/" + v
    if not os.path.exists(f + ".zip"):
        shutil.make_archive(f, 'zip', "mc-mappings/" + v)