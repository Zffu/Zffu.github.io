import urllib.request
import os
import zipfile

opener = urllib.request.URLopener()
opener.addheader("User-Agent", "Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.01")

with opener.open("https://maven.minecraftforge.net/de/oceanlabs/mcp/mcp_snapshot/maven-metadata.xml") as res:
    r = res.read().decode("utf-8").replace("<metadata><groupId>de.oceanlabs.mcp</groupId><artifactId>mcp_snapshot</artifactId><versioning><release>20211108-1.15.1</release><latest>20211108-1.15.1</latest><lastUpdated>20211108214743</lastUpdated><versions>", "").replace("</versioning>", "").replace("</versions>", "").split("<version>")

def downloadForVer(version):
    mappings = version
    if "1.15.2" in mappings:
        mappings = "1.15.1"

    versions = 0
    latest = 0

    for line in r:
        if "</version>" in line:
            line = line.replace("<version>", "")
            line = line.replace("</version>", "")
            ver = line.split("-")
            if ver[1] == mappings:
                versions += 1    
                time = int(ver[0])
                if time > latest:
                    latest = time
    print("[INFO] Found " + str(versions) + " possible mappings version, selecting latest one (" + str(latest) + ")")        

    print("[INFO] Downloading mappings...")
    opener.retrieve("https://maven.minecraftforge.net/de/oceanlabs/mcp/mcp_snapshot/" + str(latest) + "-" + mappings +"/mcp_snapshot-" +  str(latest) + "-" + mappings + ".zip", mappings + ".zip")

    with zipfile.ZipFile(mappings + ".zip", "r") as zip:
        zip.extractall("mc-mappings/" + version)

# Get all versions from mc-mappings directory
versions = [d for d in os.listdir("mc-mappings") if os.path.isdir(os.path.join("mc-mappings", d))]

# Download mappings for each version
for version in versions:
    print(f"[INFO] Processing version {version}")
    try:
        downloadForVer(version)
    except Exception as e:
        print(f"[ERROR] Failed to download mappings for {version}: {str(e)}")
