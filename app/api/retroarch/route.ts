export function GET(request: Request) {
        const command = new Deno.Command("/usr/bin/flatpak", {
            stdin: "null",
            stdout: "null",
            args: [
                "run",
                "org.libretro.RetroArch/x86_64/stable" ,
                "-L" ,
                "$HOME/.var/app/org.libretro.RetroArch/config/retroarch/cores/yabause_libretro.so",
                "$HOME/roms/saturn/Sega Rally Championship (Saturn) (E)/SEGARALLY.BIN"
            ]
        });
        command.spawn();
        return new Response(null, {status: 200});
}