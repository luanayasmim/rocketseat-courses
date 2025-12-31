import { Readable, Writable, Transform } from "node:stream";

// process.stdin.pipe(process.stdout);

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) this.push(null);
      else {
        const buffer = Buffer.from(String(`${i}\n`));

        this.push(buffer);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunck, encoding, callback) {
    console.log(Number(chunck.toString() * 10));
    callback();
  }
}

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
