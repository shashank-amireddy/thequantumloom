export default () => {
  return (
    <div>
      <div className="relative flex items-center gap-x-4">
        <img
          src="\pfp.jpg"
          alt=""
          className="h-11 w-11 rounded-full ring-1"
        />
        <div className="text-lg leading-6">
          <p className="font-semibold text-primary">
            <a href="#">
              <span className="absolute inset-0"></span>
              Shashank Reddy
            </a>
          </p>
          <p className="text-zinc-500">
            a.k.a Quan7umL00m
          </p>
        </div>
      </div>
      <p className="text-4xl mt-6 font-medium lg:text-4xl tracking-tight text-primary">
        Hey, welcome to my site!
      </p>
      <p className="mt-4 text-xl text-zinc-500  className font-light lg:text-xl">
      I’m currently playing CTFs with bi0sblr while exploring cryptography, blockchain development, and security. It’s been a thrilling ride so far, and I love tackling challenges that push my understanding further.
        <br />
        <br />
        When I’m not deep into code, I’m either reading or admiring watches. I mostly read self-help and some fiction—my last read was How to Lie with Statistics because numbers do lie.
      </p>
    </div>
  );
};