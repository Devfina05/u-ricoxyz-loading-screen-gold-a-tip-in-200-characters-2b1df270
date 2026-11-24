// Loading Screen Gold entry (Node 22, standard library only): writes one
// line, 137 characters, a sharp funny loading-screen tip for stressed
// developers and AI coding agents, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Why it works: it reframes a real developer fear (flaky, unreproducible
// behaviour — the classic heisenbug) as stage fright, then gives the
// stressed reader something actionable and funny: add a log line and let
// the code perform. The joke lands mid-build, exactly where a loading
// tip is read.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'Tip: if your code only works when nobody is watching, it is not a race condition, it is stage fright — add a log line and let it perform.',
);
